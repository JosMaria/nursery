import { PlantClassificationType } from "../types"

export const ClassificationNavbar = () => {

  const CLASSIFICATIONS: Array<PlantClassificationType> = [
    'ORNAMENTAL', 'FOREST', 'INDUSTRIAL', 'ALIMENTARY', 'MEDICINAL',
    'EXOTIC', 'CACTUS', 'FRUITFUL', 'GRASS', 'SUCCULENT'
  ]

  return (
    <ul className="flex bg-paint-brown text-white py-4 text-center">
      <li className="flex-1 text-sm">
        TODO
      </li>
      {CLASSIFICATIONS.map(classification => (
        <li key={classification} className="flex-1 text-sm">
          {classification}
        </li>
      ))}
    </ul>
  )
}