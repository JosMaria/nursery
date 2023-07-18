import { StatusType } from '../../../types'
import { SingleProductDTO } from '../types'

interface InformationProps {
  product: SingleProductDTO
}

export const Information = ({ product }: InformationProps) => {
  // get this description of the product
  const descriptionMock =
    `Planta perennes, herbáceas o leñosas, erectas, rastreras o trepadoras, de hojas muy decorativas. 
    Las hojas son de consistencia y grosor notables, ovales, en forma de corazón o punta de flecha, 
    bastante grande, a veces divididas en lóbulos o incluso en forma de mano.`

  return (
    <article className='flex gap-10 h-96 p-5'>
      <section className='w-1/2 bg-red-400'>
        Imagenes
      </section>
      <section className='w-1/2 flex flex-col p-5 bg-amber-50 text-sm rounded-lg'>
        <InformationBase
          commonName={product.commonName}
          scientificName={product.scientificName}
          scientistSurnameInitial={product.scientistSurnameInitial}
          family={product.family}
          status={product.status}
          classifications={product.classifications}
        />
        <Description description={descriptionMock} />
      </section>
    </article>
  )
}

interface InformationBaseProps {
  commonName: string
  scientificName: string | null
  scientistSurnameInitial: string | null
  family: string | null
  status: StatusType
  classifications: Array<string>
}

const InformationBase = ({ commonName, scientificName, scientistSurnameInitial, family, status, classifications }: InformationBaseProps) => (
  <>
    <h1 className='text-2xl font-medium first-letter:uppercase text-center'>{commonName}</h1>
    <div className='flex gap-10 py-4'>
      <div className='flex flex-col font-medium w-fit'>
        <p>Nombre Cientifico</p>
        <p>Familia</p>
        <p>Estado</p>
        <p>Clasificaciones</p>
      </div>

      <div className='flex flex-col w-fit'>
        <p className='first-letter:uppercase'><i>{scientificName} {scientistSurnameInitial}</i></p>
        <p className='first-letter:uppercase'>{family}</p>
        <p className='first-letter:uppercase'>{status}</p>
        <ul className='list-disc list-inside'>
          {classifications.map(classification =>
            (<li key={classification}>{classification}</li>))}
        </ul>
      </div>
    </div>
  </ >
)

interface DescriptionProps {
  description: string
}

const Description = ({ description }: DescriptionProps) => (
  <div className=' flex flex-col gap-1 h-1/2'>
    <h2 className='font-medium text-lg'>Descripcion</h2>
    <p>{description}</p>
  </div>
)
