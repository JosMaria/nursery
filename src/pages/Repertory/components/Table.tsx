import { data as ITEMS } from '../data/store'

const HEADERS_TITLE = ['Nombre Comun', 'Nombre Cientifico', 'Familia', 'Estado']

export const Table = () => {
  const cellStyled = 'px-4 py-1.5 font-medium first-letter:uppercase'

  const tableHeader = (
    <thead className='bg-paint-brown text-white'>
      <tr>
        {HEADERS_TITLE.map((title, index) =>
          <th key={index} className='font-normal p-3 text-sm'>
            {title}
          </th>)}
      </tr>
    </thead>
  )

  const tableBody = (
    <tbody>
      {ITEMS.content.map(item =>
        <tr
          key={item.id}
          className='text-sm bg-stone-200 [&:nth-child(even)]:bg-stone-300'
        >
          <td className={cellStyled}>{item.commonName}</td>
          <td className={`${cellStyled} italic`}>{item.scientificName} {item.scientistSurnameInitial?.toUpperCase()}</td>
          <td className={cellStyled}>{item.family}</td>
          <td className={cellStyled}>{item.status}</td>
        </tr>)}
    </tbody>
  )

  return (
    <table className='w-[50em]'>
      {tableHeader}
      {tableBody}
    </table>
  )
}
