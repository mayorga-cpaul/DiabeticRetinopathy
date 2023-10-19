import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HeaderParam } from '../models/enums/Headers';
import { UserRegister } from '../models/UserRegister';
import { UserbyDoctor } from '../models/results/UserMininal';
import { DiagnosticPatient } from '../models/results/DiagnosticPatient';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  private header: HttpHeaders;
  private ENDPOINT: string = environment.ENDPOIN_BASE_EYESCARE;

  constructor(private httpClient: HttpClient) {
    this.header = new HttpHeaders({
      [HeaderParam.Accept]: '*/*',
      [HeaderParam.Authorization]: `Bearer ${environment.TOKEN}`,
      [HeaderParam.ContentType]: 'application/json'
    });
  }

  public AddUser(UserData: UserRegister) {
    console.log(UserData);

    const url = `${this.ENDPOINT}api/Auth/register`;
    const body = JSON.stringify(UserData);
    return this.httpClient.post(url, body, { headers: this.header });
  }

  public getPacients(doctorid: number) {
    return this.httpClient.get<UserbyDoctor[]>(`https://eyescare.azurewebsites.net/api/Retina/patients-by-doctorid?DoctorId=${doctorid}`, { headers: this.header })
  }
  public getHistoryPacient(doctorid: number, userId: number) {
    return this.httpClient.get<DiagnosticPatient[]>(`https://eyescare.azurewebsites.net/api/Retina/history?patientId=${userId}&doctorId=${doctorid}`, { headers: this.header })
  }

}