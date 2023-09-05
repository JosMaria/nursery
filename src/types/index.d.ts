export type StatusType =
	'AVAILABLE' |
	'IN_CONSERVATION' |
	'NON_EXISTENT'

export type PlantClassificationType =
	'ORNAMENTAL' |
	'FOREST' |
	'INDUSTRIAL' |
	'ALIMENTARY' |
	'MEDICINAL' |
	'EXOTIC' |
	'CACTUS' |
	'FRUITFUL' |
	'GRASS' |
	'SUCCULENT'

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
