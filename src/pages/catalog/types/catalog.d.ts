type StatusType =
  'AVAILABLE' |
  'IN_CONSERVATION' |
  'NON_EXISTENT'

interface ProductResponseDTO {
  id: number,
  commonName: string,
  scientificName: string | null,
  scientistSurnameInitial: string | null,
  status: StatusType,
  family: string | null
}

export interface PageCatalog {
  content: Array<ProductResponseDTO>,
  last: boolean,
	totalElements: number,
	totalPages: number,
	size: number,
	number: number,
	first: boolean,
	numberOfElements: number,
	empty: boolean
}
