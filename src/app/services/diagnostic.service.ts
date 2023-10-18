import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HeaderParam } from '../models/enums/Headers';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticService {

  private ENDPOINT: string = environment.ENDPOIN_BASE_EYESCARE;
  private headers: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append(HeaderParam.Accept,'application/json');
    this.headers.append(HeaderParam.Authorization, 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJBZG1pbiI6IkFkbWluIiwiVXNlcnMiOiJBdXRoQ29udHJvbGxlciIsIm5iZiI6MTY5NzU5NDg5MiwiZXhwIjoxNjk3NjgxMjkyLCJpYXQiOjE2OTc1OTQ4OTIsImlzcyI6IkV5ZXNDYXJlQmFja2VuZCJ9.RfITgyyyMiH3xW91vYUon2RnIYkeW3d48-t4bPt5rabkTUaoB3k-BY56eIt_3BU7O7H_p4ydQaXgn8JDHP9DqA');
    this.headers.append(HeaderParam.ContentType,'application/json');


  }

  public getActiveUser(){
    this.httpClient.post(`${this.ENDPOINT}api/Auth/users`,'',{headers: this.headers}).subscribe((repsonse) => {
      console.log(repsonse);    
    })
  }
}
