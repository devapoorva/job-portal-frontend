export type ChaptetType = {
  id?: number
  name: string
  zoneId: string | number
  cityId: string | number
}

export type ChapterResponse = {
  isSuccess: boolean
  data: ChaptertDetailsType[]
  message: string
  pageNumber: number
  pageSize: number
  totalRecords: number
  totalPages: number
}

export type ChaptertDetailsType = {
  id: number
  name: string
  zoneId: number
  cityId: number
  createdAt: string
  updatedAt: string
  updatedBy: string | null
  createdBy: string
  isDeleted: boolean
  zone: string | null
  city: string | null
}
export type CreatedChapterResponse = {
    isSuccess: boolean
    data: ChaptertDetailsType
    message: string
}