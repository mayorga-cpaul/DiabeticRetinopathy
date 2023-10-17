import { Injectable } from '@angular/core';
import { UserLogin } from '../models/UserLogin';
import { LocalStorageRepository } from '../repository/LocalStorageRepository';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private localStrgRepo: LocalStorageRepository) { }
  private IsvalidUser: boolean = false;

  public setValues(user: UserLogin){

    if(user.email.toLowerCase() === 'kevin'){
      this.IsvalidUser = true;
      
    }else{
      this.IsvalidUser = false;
    }
    
  }

  public logout(){
    
  }


  public login(){
    
  }

  public IsValid(){
    return this.IsvalidUser;
  }

 
}
