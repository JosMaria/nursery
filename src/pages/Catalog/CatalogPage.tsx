import { Card } from './components'
import { data as PRODUCTS } from './data/store'

export const CatalogPage = () => {
  console.log(PRODUCTS)

  return (
    <article className='flex flex-wrap justify-center gap-12 p-5'>
      {PRODUCTS.content.map(product => (
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
