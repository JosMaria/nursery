import { data as PRODUCTS } from './data/store'

export const CatalogPage = () => {

  console.log(PRODUCTS)

  return (
    <article className='flex flex-col'>
      {PRODUCTS.content.map(product => (
        <div key={product.id} className='border border-slate-900'>
          <p>{product.commonName}</p>
          <p>{product.scientificName} {product.scientistSurnameInitial}</p>
          <p>{product.family}</p>
        </div>
      ))}
    </article>
  )
}