import { Outlet, useParams } from 'react-router-dom'
import { Information, Suggestions } from './components'
import { useEffect, useState } from 'react'
import { getProductByID } from './services'
import { SingleProductDTO } from './types'
import { NavLink } from 'react-router-dom'

const initialProduct: SingleProductDTO = {
  id: 0,
  commonName: '',
  scientificName: '',
  scientistSurnameInitial: '',
  family: '',
  status: '',
  classifications: [],
  urlPictures: []
}

export const SingleProduct = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(initialProduct)

  useEffect(() => {
    if (id) {
      getProductByID(parseInt(id))
        .then(singleProduct => setProduct(singleProduct))
    }
  }, [])

  return (
    <>
      <Information product={product} />
      <div>
        <nav className='flex gap-5'>
          <NavLink
            to='.'
            className={({ isActive }) => isActive ? 'underline' : ''}
          >
            Ficha tecnica
          </NavLink>
          <NavLink
            to='details'
            className={({ isActive }) => isActive ? 'underline' : ''}
          >
            Detalles
          </NavLink>
          <NavLink
            to='notes'
            className={({ isActive }) => isActive ? 'underline' : ''}
          >
            Notas
          </NavLink>
        </nav>
        <Outlet />
      </div>
      <Suggestions />
    </>
  )
}
