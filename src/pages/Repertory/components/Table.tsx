import { data as ITEMS } from '../data/store'

const HEADERS_TITLE = ['Nombre Comun', 'Nombre Cientifico', 'Familia', 'Estado']

export const Table = () => {

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

  return (
    <table className='w-[60em]'>
      {tableHeader}
      <tbody>
        {ITEMS.content.map(item =>
          <tr
            key={item.id}
            className='text-sm'
          >
            <td>{item.commonName}</td>
            <td>{item.scientificName} {item.scientistSurnameInitial}</td>
            <td>{item.family}</td>
            <td>{item.status}</td>
          </tr>)}
      </tbody>
    </table>
  )
}
