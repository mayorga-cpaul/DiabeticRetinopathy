export class Diagnostic {
    userName?: string = ''
    email?: string = ''
    password?: string = ''
    phone?: string = ''
    cedula?: string = ''
    doctorId?: number = 0
    nurseId?: number = 0
    imageSource?: string = ''
    mild?: number = 0
    noDiabeticRetinopathy?: number = 0
    severe?: number = 0
    moderate?: number = 0
    proliferative?: number = 0
    aiAnalysis?: string = ''
    roles?: Role[]
    userClaims?: UserClaim[]
}

export interface Role {
    roleName: string
  }
  
  export interface UserClaim {
    userClaimId: number
    userId: number
    claimType: string
    claimValue: string
  }