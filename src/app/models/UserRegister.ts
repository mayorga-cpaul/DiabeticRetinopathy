export class UserRegister {
  userName: string = '';
  email: string = "";
  cedula: string = "";
  password: string = "";
  phone: string = "";
  roles: Role;
  userClaims: UserClaim
}

export interface Role {
    roleName: string
}

export interface UserClaim {
    claimType: string
    claimValue: string
}