import { SingleProductDTO } from "../types"

interface InformationProps {
  product: SingleProductDTO
}

export const Information = ({ product }: InformationProps) => {
  const contentInfoBase = (
    <div className='flex flex-col items-center gap-5 bg-paint-brownLight'>
      <h1 className='font-serif text-center text-2xl font-medium first-letter:uppercase'>{product.commonName}</h1>
      <div className='flex flex-col gap-1 w-96'>
        <InfoParagraph word='NOMBRE CIENTIFICO'>
          <p className='first-letter:uppercase'><i>{product.scientificName} {product.scientistSurnameInitial}</i></p>
        </InfoParagraph>
        <InfoParagraph word='FAMILIA'>
          <p className='first-letter:uppercase'>{product.family}</p>
        </InfoParagraph>
        <InfoParagraph word='ESTADO'>
          <p>{product.status}</p>
        </InfoParagraph>
        <InfoParagraph word='CLASIFICACIONES'>
          <ul className='list-disc'>
            {product.classifications.map(classification => (
              <li key={classification}>{classification}</li>))}
          </ul>
        </InfoParagraph>
      </div>
    </div>
  )

  const contentDescription = (
    <div className='h-1/2 bg-red-100 p-5'>
      <h2 className='font-normal text-lg font-mono'>Descripcion</h2>
      <p className='text-sm'>
        Planta perennes, herbáceas o leñosas, erectas, rastreras o trepadoras, de hojas muy decorativas. Las hojas son de consistencia y grosor notables, ovales, en forma de corazón o punta de flecha, bastante grande, a veces divididas en lóbulos o incluso en forma de mano.
      </p>
    </div>
  )

  return (
    <article className='flex gap-10 h-96 bg-red-600 p-5'>
      <section className='w-1/2 bg-red-400'>
        Imagenes
      </section>
      <section className='w-1/2 bg-red-300 flex flex-col gap-5 p-2'>
        {contentInfoBase}
        {contentDescription}
      </section>
    </article>
  )
}

interface InfoParagraphProps {
  word: string
  children: JSX.Element
}

const InfoParagraph = ({ word, children }: InfoParagraphProps) => (
  <div className='grid grid-cols-2 justify-start gap-5 text-sm border-b-2 border-b-gray-500'>
    <p className='font-light'>{word}</p>
    {children}
  </div>
)
