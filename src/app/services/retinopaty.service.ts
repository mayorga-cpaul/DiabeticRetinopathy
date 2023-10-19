import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PredictionResult } from '../models/results/PredictionResult';

@Injectable({
  providedIn: 'root'
})
export class RetinopatyService {
  constructor(private httpClient: HttpClient) {}

  public uploadImage(imageFile: File): Observable<PredictionResult> {
    const formData = new FormData();
    formData.append('file', imageFile, imageFile.name);
    return this.httpClient.post<PredictionResult>('http://127.0.0.1:8000/process_image/', formData);
  }
}