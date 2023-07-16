import { useEffect, useState } from 'react'
import { Card } from './components'
import { getPaginatedProducts } from './services'
import { PageCatalog } from './types'

const pageCatalogInitial: PageCatalog = {
  content: [],
  number: 0,
  totalElements: 0,
  totalPages: 0,
  size: 0,
  numberOfElements: 0,
  empty: true,
  first: true,
  last: true
}

export const CatalogPage = () => {

  const [pageCatalog, setPageCatalog] = useState<PageCatalog>(pageCatalogInitial)

  useEffect(() => {
    getPaginatedProducts('ALIMENTARY', 0)
      .then(response => setPageCatalog(response))
  }, [])

  return (
    <article className='flex flex-wrap justify-center gap-12 p-5'>
      {pageCatalog.content.map(product => (
        <Card
          key={product.id}
          id={product.id}
          commonName={product.commonName}
          scientificName={product.scientificName}
          scientistSurnameInitial={product.scientistSurnameInitial}
          family={product.family}
          status={product.status}
        />
      ))}
    </article>
  )
}
