import { PlantClassificationType } from '../../../types'

export interface SingleProductDTO {
  id: number
  commonName: string
  scientificName: string | null
  scientistSurnameInitial: string | null
  family: string | null
  status: StatusType
  urlPictures: Array<string>
  classifications: Array<PlantClassificationType>
}
