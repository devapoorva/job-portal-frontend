export type ZoneType ={
    id:number
    name:string
    country:string | number
}
export type ZoneDetilsType ={
    id: number
    name: string
    countryId: number
    status: boolean
    createdAt: string
    updatedAt: string
    updatedBy: string|null
    createdBy: string
    isDeleted: boolean
    country: string | number 
}