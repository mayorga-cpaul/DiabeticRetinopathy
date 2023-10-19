import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HeaderParam } from '../models/enums/Headers';

@Injectable({
  providedIn: 'root'
})
export class RetinopatyService {

  constructor(private httpClient: HttpClient) {
    
  }
  public uploadImage(imageFile: File): Observable<any> {
    
    const formData = new FormData();
    formData.append('file', imageFile, imageFile.name);

    const headers = new HttpHeaders({
      [HeaderParam.Accept]: '*/*',
      [HeaderParam.ContentType]: 'multipart/form-data'
    }); 

    return this.httpClient.post<{}>(`${environment.ENDPOINT_BASE}`, formData, { headers });
  }
 
}
