import { NavLink } from 'react-router-dom';

const technicalSheetInfo = [
  {
    word: 'Origen',
    info: 'Zonas tropicales y subtropicales de América.'
  },
  {
    word: 'Tamaño',
    info: 'Hasta 0.7 m de altura.'
  },
  {
    word: 'Floración',
    info: 'Las flores insignificantes; el espádice, que a menudo se confunde con la flor, puede ser amarillo, rojo, purpúreo, verde manzana, rosa intenso, casi anaranjado, blancas y negras.'
  },
  {
    word: 'Ubicación',
    info: 'Planta de sombra o media sombra, no resiste los rayos directos del sol, ni los descensos bruscos de temperatura.'
  },
  {
    word: 'Suelo',
    info: 'Bien aireados y drenados, con un pH óptimo en 5.7. Riego: En Verano unas 3 veces a la semana, en invierno 1 vez por semana.'
  },
  {
    word: 'Fertilización',
    info: 'Abonar una vez cada 15 días con un fertilizante líquido para plantas de flor, durante primavera y verano.'
  },
  {
    word: 'Poda',
    info: 'Es de crecimiento compacto, por lo que las podas únicamente se realizan cuando se cosechan las flores. Plagas y enfermedades: Araña roja, Trips, Mosca blanca, orugas, pulgones, nematodos, cochinillas, caracoles. Podredumbre radicular. Antracnosis y Septoria.'
  },
  {
    word: 'Enfermedades',
    info: 'bacterianas y virosis'
  },
  {
    word: 'Tratamientos Fitosanitarios',
    info: ''
  },
  {
    word: 'Propagación',
    info: 'Por semillas, vegetativa y por tejidos vegetales.'
  },
  {
    word: 'Otros',
    info: 'se comercializa por macetas'
  }
]

export const TechnicalSheet = () => (
  <article className='bg-blue-700 px-10 py-5 flex flex-col gap-5'>
    <nav className='p-2 flex gap-10 text-xl font-medium'>
      <NavLink to='/product/#/technical-sheet'>
        Ficha Tecnica
      </NavLink>
      <NavLink to='/product/#/details'>
        Detalles
      </NavLink>
      <NavLink to='/product/#/notes' >
        Notas
      </NavLink>
    </nav>

    <section className='flex flex-col gap-2 bg-blue-200 p-5 w-2/3'>
      {technicalSheetInfo.map((item, index) => (
        <div key={index} className='flex text-sm border-b-2 border-gray-400'>
          <p className='font-medium min-w-[12em] max-w-[12em]'>{item.word}</p>
          <p>{item.info}</p>
        </div>
      ))}
    </section>
  </article>
)
