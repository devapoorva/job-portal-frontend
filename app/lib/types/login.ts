export type LoginUser ={
    accessToken: string
    refreshToken: string
}
export type EpLogin ={
    email: string
    password: string
}

export type LogInResponse ={
    userId: string
    user: LoggedInUser
  }
  
  export type LoggedInUser ={
    id: number
    mobile: string
    email: string
    password: string
    secretKey: string
    userType: string
    userAuthId: string
    status: boolean
    createdAt: string
    updatedAt: string
    updatedBy: string|null
    createdBy: string
    isDeleted: boolean
  }
  