import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HeaderParam } from '../models/enums/Headers';
import { UserRegister } from '../models/UserRegister';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  private header: HttpHeaders;
  private ENDPOINT: string = environment.ENDPOIN_BASE_EYESCARE;

  constructor(private httpClient: HttpClient) { 
    this.header = new HttpHeaders({
      [HeaderParam.Accept]: '*/*',
      [HeaderParam.Authorization] : `Bearer ${environment.TOKEN}`,
      [HeaderParam.ContentType]: 'application/json'
  }); 
  }

  public AddUser(UserData: UserRegister){
    console.log(UserData);
    
    const url = `${this.ENDPOINT}api/Auth/register`;
    const body = JSON.stringify(UserData);
    return this.httpClient.post(url, body, {headers: this.header});
  }

}