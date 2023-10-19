import { Injectable } from '@angular/core';
import { UserLogin } from '../models/UserLogin';
import { LocalStorageRepository } from '../repository/LocalStorageRepository';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HeaderParam } from '../models/enums/Headers';
import { AuthenticatedUser } from '../models/auth/AuthenticatedUser';
import { Observable, Observer, Subject, lastValueFrom } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MetadataUser } from '../models/auth/MetadataUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private ENDPOINT: string = environment.ENDPOIN_BASE_EYESCARE;
  private headers: HttpHeaders;
  private localData$: Subject<MetadataUser> = new Subject<MetadataUser>;
  private data: MetadataUser;
    constructor(
    private repoLocalStorage: LocalStorageRepository,
    private http: HttpClient,
    private jwtHelper: JwtHelperService) {

    this.headers = new HttpHeaders({
      [HeaderParam.Accept]: '*/*',
      [HeaderParam.ContentType]: 'application/json'
    });

    this.getValues();
  }


  /**
   * 
   * @param credentials `Userlogin`
   * @returns retorna un `Observable<AuthenticatedUser>`
   */
  public AuthUser(credentials: UserLogin): Observable<AuthenticatedUser> {
    const url = `${this.ENDPOINT}api/Auth/token`;
    const jsonBody = JSON.stringify(credentials);

    return new Observable((observer: Observer<AuthenticatedUser>) => {
      this.http.post<AuthenticatedUser>(url, jsonBody, { headers: this.headers }).subscribe({
        next: (response: AuthenticatedUser) => {

          const key: string = 'AuthUser';
          this.validSession(response, key);
          observer.next(response);
          observer.complete();

        },
        error: (error: HttpErrorResponse) => {
          if (error.status === 400) {
            const errorMessage = error.error.Password[0].ErrorMessage;
            observer.error(errorMessage);
          } else {
            observer.error('Otro tipo de error');
          }
        },
      });
    });
  }


  /**
   * Guarda la sesion del usuario
   * @param authUser 
   * @param keyData 
   */
  private validSession(authUser: AuthenticatedUser, keyData: string): void {

    const metadataUser: MetadataUser = {
      islogin: true,
      role: this.decodeJWT<any>(authUser.token).Name,
      data: authUser
    }

    this.repoLocalStorage.saveData<MetadataUser>(metadataUser, keyData);
    this.localData$.next(metadataUser);
  }

  /**
   * Invalida la sesion del usuario logueado
   */
  public invalidSession(): void {
    const metadataUser = this.repoLocalStorage.getData<MetadataUser>('AuthUser');

    metadataUser.islogin = false;
    metadataUser.role = '';
    metadataUser.data = null;

    this.repoLocalStorage.saveData(metadataUser, 'AuthUser');
    this.localData$.next(metadataUser);
    
  }



  public IsValid() {
    try {
      const userData = this.repoLocalStorage.getData<MetadataUser>('AuthUser');

      if(userData !== undefined && userData.islogin == true){
          return userData;
      }else{
        return userData;
      }

    } catch (error) {
      console.error("Error en IsValid:", error);
      return null;
    }
  }

  private  getValues(){
    lastValueFrom(this.localData$.asObservable()).then((result) => {
      this.data = result;
      console.log(result);
      
    });
  }
/**
 * 
 * @param tokenEncode 
 * @returns 
 */
  private decodeJWT<T>(tokenEncode: string): T {
    
    return this.jwtHelper.decodeToken<T>(tokenEncode);
  }

}
