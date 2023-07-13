import { data as PRODUCTS } from './data/store'

export const CatalogPage = () => {

  console.log(PRODUCTS)

  return (
    <article className='flex flex-wrap justify-center gap-10'>
      {PRODUCTS.content.map(product => (
        <div key={product.id} className='flex flex-col w-80 bg-slate-100 text-sm px-5 py-3 leading-5'>
          <p className='font-bold text-lg text-center first-letter:uppercase'>{product.commonName}</p>
          <p className='font-thin italic'>{product.scientificName} {product.scientistSurnameInitial}</p>
          <p className='font-light'>{product.family}</p>
          <p className='bg-slate-300 w-fit px-2 font-medium rounded-lg self-end'>{product.status}</p>
        </div>
      ))}
    </article>
  )
}