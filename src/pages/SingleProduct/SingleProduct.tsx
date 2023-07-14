export const SingleProduct = () => {

  const contentInfoBase = (
    <div className='flex flex-col items-center gap-5 bg-paint-brownLight'>
      <h1 className='font-serif text-center text-2xl font-medium first-letter:uppercase'>flor de navidad</h1>
      <div className='flex flex-col gap-1 w-96'>
        <InfoParagraph word='NOMBRE CIENTIFICO'>
          <p className='first-letter:uppercase'>euphorbia pulcherrima</p>
        </InfoParagraph>
        <InfoParagraph word='FAMILIA'>
          <p className='first-letter:uppercase'><i>euphorbiaceae</i></p>
        </InfoParagraph>
        <InfoParagraph word='ESTADO'>
          <p>DISPONIBLE</p>
        </InfoParagraph>
        <InfoParagraph word='CLASIFICACIONES'>
          <ul className='list-disc'>
            <li>ORNAMENTAL</li>
            <li>CACTUS</li>
          </ul>
        </InfoParagraph>
      </div>
    </div>
  )

  const contentDescription = (
    <div className='h-1/2 bg-red-100 p-5'>
      <h2 className="font-normal text-lg font-mono">Descripcion</h2>
      <p className="text-sm">
        Planta perennes, herbáceas o leñosas, erectas, rastreras o trepadoras, de hojas muy decorativas. Las hojas son de consistencia y grosor notables, ovales, en forma de corazón o punta de flecha, bastante grande, a veces divididas en lóbulos o incluso en forma de mano.
      </p>
    </div>
  )

  const sectionInfo = (
    <section className='w-1/2 bg-red-300 flex flex-col gap-5 p-2'>
      {contentInfoBase}
      {contentDescription}
    </section>
  )

  return (
    <>
      <article className='flex gap-10 h-96 bg-red-600 p-5'>
        <section className='w-1/2 bg-red-400'>
          Imagenes
        </section>
        {sectionInfo}
      </article>

      <article className='bg-blue-700 px-10 py-5 flex flex-col gap-5'>
        <nav className='flex gap-5 bg-blue-400'>
          <div>Description</div>
          <div>Notas</div>
        </nav>
        <hr />
        <section className='bg-blue-200'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo laborum vero itaque. Unde quibusdam architecto exercitationem rem quae omnis quos eligendi, tenetur eos rerum accusamus culpa tempora explicabo, dicta maiores.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo laborum vero itaque. Unde quibusdam architecto exercitationem rem quae omnis quos eligendi, tenetur eos rerum accusamus culpa tempora explicabo, dicta maiores.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo laborum vero itaque. Unde quibusdam architecto exercitationem rem quae omnis quos eligendi, tenetur eos rerum accusamus culpa tempora explicabo, dicta maiores.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo laborum vero itaque. Unde quibusdam architecto exercitationem rem quae omnis quos eligendi, tenetur eos rerum accusamus culpa tempora explicabo, dicta maiores.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo laborum vero itaque. Unde quibusdam architecto exercitationem rem quae omnis quos eligendi, tenetur eos rerum accusamus culpa tempora explicabo, dicta maiores.
        </section>
      </article>

      <article className=' bg-green-700 px-10 py-5 flex flex-col gap-5'>
        <h1>Sugerencias</h1>
        <section className='bg-green-300 flex gap-10'>
          <div>Sugerencias 1</div>
          <div>Sugerencias 2</div>
          <div>Sugerencias 3</div>
        </section>
      </article>
    </>

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