import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http"
import { environment } from "src/environments/environment";
import { HeaderParam } from "../models/enums/Headers";
import { Observable } from "rxjs";
import { DoctorService } from "./Doctor.Service";

@Injectable({
    providedIn: 'root'
})
export class DoctorListService {

    private ENDPOINT: string = environment.ENDPOIN_BASE_EYESCARE;
    private header: HttpHeaders;


    constructor(private httpClient: HttpClient, private doctorService: DoctorService){
        this.header = new HttpHeaders({
            [HeaderParam.Accept]: 'application/json',
            [HeaderParam.Authorization] : `Bearer ${environment.TOKEN}`
        });
    }

    public GetUserByRole(roleName: string): Observable<any[]>{

        const url = `${this.ENDPOINT}api/Auth/users-by-rolename?RoleName=${roleName}`;
        this.httpClient.get(url,{headers: this.header, params: {'RoleName':roleName}})
        return this.httpClient.get<any[]>(url);
    }

    GetDoctorToList(){
        this.GetUserByRole('Doctor').subscribe(
            (data) => {
                data.forEach((doctor) => {
                    this.doctorService.addDoctorToList(doctor.userId, doctor.Name);
                });
                
                const usersWithIdAndName = this.doctorService.getDoctorList().map((user) => {
                    return { id: user.id, name: user.name };
                  });

                  console.log(usersWithIdAndName);
                
            },
            (error) => {
                console.error('Error al obtener usuarios por rol:', error);
            }
        )
    }
}