export type CityType = {
    id: number
    name: string
    stateId: number
    createdAt: string
    updatedAt: string
    updatedBy: string
    createdBy: string
    isDeleted: boolean
    state: State
  }
  
  export type State = {
    id: number
    name: string
    countryId: number
    createdAt: string
    updatedAt: string
    updatedBy: string|null
    createdBy: string
    isDeleted: boolean
    country: string|null
  }

  export type CityResponse ={
    isSuccess: boolean
    data: CityType[]
    message: string
    pageNumber: number
    pageSize: number
    totalRecords: number
    totalPages: number
  }