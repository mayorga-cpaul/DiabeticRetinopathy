import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HeaderParam } from '../models/enums/Headers';
import { Diagnostic } from '../models/Diagnostic';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticService {

  private ENDPOINT: string = environment.ENDPOIN_BASE_EYESCARE;
  private headers: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({
      [HeaderParam.Accept]: '*/*',
      [HeaderParam.ContentType]: 'application/json',
      [HeaderParam.Authorization] : `Bearer ${environment.TOKEN}`
    })
    
    

  }

  public getActiveUser(){
    
  }


  public fetchUsers(){
    this.httpClient.get(`${this.ENDPOINT}api/Auth/users`,{headers: this.headers}).subscribe((repsonse) => {
      console.log('datos',repsonse);    
    })
  }
  public createDiagnostic(diagnostic: Diagnostic){
    const body = JSON.stringify(diagnostic);
    return this.httpClient.post(`${this.ENDPOINT}api/Retina/patient`,body,{headers: this.headers});
  }
  
}
