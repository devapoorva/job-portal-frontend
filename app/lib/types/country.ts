export type CountryResponse = {
    isSuccess: boolean
    data: CountryType[]
    message: string
    pageNumber: number
    pageSize: number
    totalRecords: number
    totalPages: number
  }
  
  export type CountryType = {
    id: number
    name: string
    isoCode: string
    status: boolean
    createdAt: string
    updatedAt: string
    updatedBy: any
    createdBy: string
    isDeleted: boolean
  }