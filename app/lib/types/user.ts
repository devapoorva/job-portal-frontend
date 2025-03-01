export type UserDetails = {
    userId: string
    user: User
  }
  
  export type User = {
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
    updatedBy: string
    createdBy: string
    isDeleted: boolean
  }