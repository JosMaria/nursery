import { useParams } from 'react-router-dom'
import { Information, TechnicalSheet, Suggestions } from './components'
import { useEffect, useState } from 'react'
import { getProductByID } from './services'
import { SingleProductDTO } from './types'

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
      <TechnicalSheet />
      <Suggestions />
    </>
  )
}
