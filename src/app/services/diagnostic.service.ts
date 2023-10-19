import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HeaderParam } from '../models/enums/Headers';
import { Diagnostic } from '../models/Diagnostic';
import { TypeService } from '../models/enums/TypeService';

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
      [HeaderParam.Authorization]: `Bearer ${environment.TOKEN}`
    })



  }

  public getActiveUser() {

  }


  public fetchUsers() {
    this.httpClient.get(`${this.ENDPOINT}api/Auth/users`, { headers: this.headers }).subscribe((repsonse) => {
      console.log('datos', repsonse);
    })
  }
  public createDiagnostic<T>(object: T, patientExists: boolean) {
    const body = JSON.stringify(object);
    const baseUrl = `${this.ENDPOINT}api/Retina/`;
    const type = patientExists ? TypeService.PACIENT_EXIST : TypeService.PACIENT_NOEXIST;
    const thisUrl = baseUrl + type;
  
    return this.httpClient.post(thisUrl, body, { headers: this.headers });
  }
  



}
