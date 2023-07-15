export type StatusType =
	'AVAILABLE' |
	'IN_CONSERVATION' |
	'NON_EXISTENT'

export interface ItemResponseDTO {
	id: number
  commonName: string
  scientificName: string | null
  scientistSurnameInitial: string | null
  family: string | null
  status: StatusType
}

export interface Page {
	last: boolean
	totalElements: number
	totalPages: number
	size: number
	number: number
	first: boolean
	numberOfElements: number
	empty: boolean
}
