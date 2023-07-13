const HEADERS_TITLE = ['Nombre Comun', 'Nombre Cientifico', 'Familia', 'Estado']

export const Table = () => {

  const tableHeader = (
    <thead className='bg-slate-900 text-white'>
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
  
      </tbody>
    </table>
  )
}
