import { NavLink, Outlet } from 'react-router-dom'

export const MoreInformation = () => {
  const styleCommon = 'py-2 px-10 rounded-t-md'

  return (
    <article className='flex flex-col p-5'>
      <nav className='flex text-xl font-medium'>
        <NavLink
          to='.'
          end
          className={({ isActive }) => isActive ? `${styleCommon} bg-amber-50 border-b-4 border-black` : `${styleCommon}`}
        >
          Ficha tecnica
        </NavLink>
        <NavLink
          to='details'
          end
          className={({ isActive }) => isActive ? `${styleCommon} bg-amber-50 border-b-4 border-black` : `${styleCommon}`}
        >
          Detalles
        </NavLink>
        <NavLink
          to='notes'
          end
          className={({ isActive }) => isActive ? `${styleCommon} bg-amber-50 border-b-4 border-black` : `${styleCommon}`}
        >
          Notas
        </NavLink>
      </nav>
      <Outlet />
    </article>
  )
}

export const TechnicalSheet = () => {
  // TODO: mock data
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

  return (
    <section className='w-2/3 p-5 flex flex-col gap-2 bg-amber-50'>
      {technicalSheetInfo.map((item, index) => (
        <div key={index} className='flex text-sm border-b-2 border-gray-400'>
          <p className='font-medium min-w-[12em] max-w-[12em]'>{item.word}</p>
          <p>{item.info}</p>
        </div>
      ))}
    </section>
  )
}

export const Details = () => (
  <h1>
    Seccion de detalles
  </h1>
)

export const Notes = () => (
  <h1>
    Seccion de notas
  </h1>
)
