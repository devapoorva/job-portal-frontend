export type ZoneType = {
    id?: number
    name: string
    countryId: string | number
}
export type ZoneDetilsType = {
    id: number
    name: string
    countryId: number
    status: boolean
    createdAt: string
    updatedAt: string
    updatedBy: string | null
    createdBy: string
    isDeleted: boolean
    country: string | number
}

export type ZoneResponse = {
    isSuccess: boolean
    data: ZoneDetilsType[]
    message: string
    pageNumber: number
    pageSize: number
    totalRecords: number
    totalPages: number
}

export type CreadedZoneResponse = {
    isSuccess: boolean
    data: ZoneDetilsType
    message: string
}
export type DeleteZoneResponse = {
    isSuccess: boolean
    data: boolean
    message: string
}
