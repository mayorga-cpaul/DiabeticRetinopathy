import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeaderParam } from '../models/enums/Headers';
import { UserCredentials } from '../models/UserCredentials';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  header: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.header = new HttpHeaders({
      [HeaderParam.ContentType]: 'application/x-www-form-urlencoded'
    });
  }

  public sendMessage(number: string, credentials: UserCredentials) {
    const formatNumber = number.replace('-', '');
    let params = new HttpParams()
      .set('token', '0dmd53m7q1sfyjli')
      .set('to', `%2B505${formatNumber}`);

    const message = '';
    const credentialsMessage = `Estimado usuario ${credentials.username}, sus credenciales de acceso son las siguientes: \nCorreo: ${credentials.email} \nContraseña: ${credentials.password}`;

    params = params.set('body', `${credentialsMessage} ${message}`);

    return this.httpClient.post("https://api.ultramsg.com/instance65705/messages/chat", params, { headers: this.header, responseType: 'text' });
  }
}
