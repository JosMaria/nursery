import { Link } from 'react-router-dom'
import EmptyImage from '../../../assets/no-image.png'
import { StatusType } from '../../../types'
import { PublicRoutes } from '../../../routes/routes'

interface Props {
  id: number
  commonName: string
  scientificName: string | null
  scientistSurnameInitial: string | null
  family: string | null
  status: StatusType
}

export const Card = ({ id, commonName, scientificName, scientistSurnameInitial, family, status }: Props) => (
  <div className='flex flex-col w-80 bg-gray-100 p-2 rounded-xl shadow-black shadow-sm hover:shadow-black hover:shadow-md border-none'>
    <img src={EmptyImage} alt={commonName} />
    <Link
      key={id}
      className='flex flex-col text-sm leading-5 p-2 cursor-pointer'
      to={PublicRoutes.SINGLE_PRODUCT}
    >
      <p className='font-bold text-lg text-center first-letter:uppercase'>{commonName}</p>
      <p className='font-thin italic'>{scientificName} {scientistSurnameInitial}</p>
      <p className='font-light'>{family}</p>
      <p className='bg-slate-300 rounded-lg w-fit px-3 py-1 font-medium text-xs self-end'>{status}</p>
    </Link>
  </div>
)
