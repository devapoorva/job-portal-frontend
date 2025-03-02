export type FireUserType = {
    uid: string
    email: string
    emailVerified: boolean
    isAnonymous: boolean
    phoneNumber: string
    displayName:string
    photoURL:string
    providerData: ProviderData[]
    stsTokenManager: StsTokenManager
    createdAt: string
    lastLoginAt: string
    apiKey: string
    appName: string
}

export type ProviderData = {
    providerId: string
    uid: string
    displayName: string
    email?: string
    phoneNumber?: string
    photoURL: string
}

export type StsTokenManager = {
    refreshToken: string
    accessToken: string
    expirationTime: number
}