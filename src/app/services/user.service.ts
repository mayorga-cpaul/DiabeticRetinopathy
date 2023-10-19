import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HeaderParam } from '../models/enums/Headers';
import { Observable } from 'rxjs';
import { TypeService } from '../models/enums/TypeService';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private ENDPOINT: string = environment.ENDPOIN_BASE_EYESCARE;
  private header: HttpHeaders;


  constructor(private httpClient: HttpClient) {
    this.header = new HttpHeaders({
      [HeaderParam.Accept]: '*/*',
      [HeaderParam.Authorization]: `Bearer ${environment.TOKEN}`
    });
  }

  public GetUserBy<T>(type: TypeService, value: number | string): Observable<T> {
    const baseUrl = `${this.ENDPOINT}api/Auth/`;
    let params = new HttpParams();
  
    if (type === TypeService.ROLE) {
      params = params.set('RoleName', value);
    } else if (type === TypeService.NAME) {
      params = params.set('Name', value);
    } else if (type === TypeService.ID) {
      params = params.set('UserId', value);
    } else if (type === TypeService.DNI) {
      params = params.set('Cedula', value);
    }
  
    const thisUrl = baseUrl + type;
    return this.httpClient.get<T>(thisUrl, { headers: this.header, params: params });
  }
  

}
