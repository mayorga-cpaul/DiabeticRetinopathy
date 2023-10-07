import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RetinopatyService {

  constructor(private httpClient: HttpClient) {
    
  }
  uploadImage(imageFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('input', imageFile, 'image.jpeg');

    const headers = new HttpHeaders();
    headers.append('accept', 'application/json');
    headers.append('Content-Type','multipart/form-data')

    console.log(formData.getAll('input'));
    
    return this.httpClient.post(`${environment.ENDPOINT_BASE}/process_image/`, formData, { headers });
  }
 
}
