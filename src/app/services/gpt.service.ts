import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PredictionResult } from '../models/results/PredictionResult';

@Injectable({
  providedIn: 'root',
})
export class GptApiService {
  private apiUrl =
    'https://api.openai.com/v1/engines/text-davinci-003/completions'; // URL de la API de GPT-3.5
  private apiKey = environment.KEY_API; // Token de autorización

  constructor(private http: HttpClient) {}

  public analyzeDiabeticRetinopathy(
    predict: PredictionResult
  ): Observable<any> {
    const inputText = `Tengo los resultados de retinopatía diabética, con los siguientes parámetros:
- Leve (Mild): ${predict.result.mild}
- No Retinopatía Diabética (No Diabetic Retinopathy): ${predict.result.no_dir}
- Severa (Severe): ${predict.result.sever}
- Moderada (Moderate): ${predict.result.moderate}
- Proliferativa (Proliferative): ${predict.result.proliferative}

Por favor, proporciona un análisis detallado de cada uno de estos parámetros de la Retinopatía Diabética.`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`, // Agregar el token de autorización
    });

    const requestBody = {
      prompt: inputText,
      max_tokens: 2000, // Número máximo de tokens en la respuesta (ajustar según necesidades)
    };

    return this.http.post(this.apiUrl, requestBody, { headers: headers });
  }
}
