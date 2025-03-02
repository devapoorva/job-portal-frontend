export type RegisterUser = {
    firstName: string
    lastName: string
    mobile: string
    email: string
    userType: string
    cityId: string
    accessToken: string,
    CountryCode: string
}

export type RegisterResponse = {
    isSuccess: boolean
    data: UaserType
    message: string
}

export type UaserType = {
    id: number
    mobile: string
    email: string
    password: string
    secretKey: string | null
    userType: string
    userAuthId: string
    status: boolean
    createdAt: string
    updatedAt: string
    updatedBy: string | null
    createdBy: string
    isDeleted: boolean
}