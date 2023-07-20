import { useState } from 'react';
import { StatusType } from '../../../types'
import { SingleProductDTO } from '../types'

import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';

interface InformationProps {
  product: SingleProductDTO
}

export const Information = ({ product }: InformationProps) => {
  // get this description of the product
  const descriptionMock =
    `Planta perennes, herbáceas o leñosas, erectas, rastreras o trepadoras, de hojas muy decorativas. 
    Las hojas son de consistencia y grosor notables, ovales, en forma de corazón o punta de flecha, 
    bastante grande, a veces divididas en lóbulos o incluso en forma de mano.`

  const urls = [
    'https://1.bp.blogspot.com/-Si6dlsgeaPQ/UtAcg7AxF9I/AAAAAAACIdQ/p80ZR0fKgdk/s1600/paisajes-naturales-nueva-colecci%C3%B3n-de-fotos-bonitas-landscape+(3).jpg',
    'https://i.pinimg.com/originals/c0/9d/f8/c09df8116570b19381b905653bca9341.jpg',
    'https://2.bp.blogspot.com/-dxvWO1aL3_w/Uetgi0x4SnI/AAAAAAAAJGA/XBIkSeYd8LI/s1600/1002932_FB_Google.jpg',
    'https://4.bp.blogspot.com/-QMGOoEe7ORo/UictQ1DRsJI/AAAAAAAB4ow/Q3F1jbR67fo/s400/cerca-del-cielo-y-los-planetas-im%C3%A1genes-de-fantas%C3%ADa-close-to-sky-landscape-1920x1200-wallpaper-.jpg',
    'https://1.bp.blogspot.com/-Si6dlsgeaPQ/UtAcg7AxF9I/AAAAAAACIdQ/p80ZR0fKgdk/s1600/paisajes-naturales-nueva-colecci%C3%B3n-de-fotos-bonitas-landscape+(3).jpg',
    // 'https://i.pinimg.com/originals/c0/9d/f8/c09df8116570b19381b905653bca9341.jpg',
    // 'https://2.bp.blogspot.com/-dxvWO1aL3_w/Uetgi0x4SnI/AAAAAAAAJGA/XBIkSeYd8LI/s1600/1002932_FB_Google.jpg',
    // 'https://4.bp.blogspot.com/-QMGOoEe7ORo/UictQ1DRsJI/AAAAAAAB4ow/Q3F1jbR67fo/s400/cerca-del-cielo-y-los-planetas-im%C3%A1genes-de-fantas%C3%ADa-close-to-sky-landscape-1920x1200-wallpaper-.jpg'
  ]

  return (
    <article className='flex gap-10 p-5'>
      <section className='w-1/2 bg-amber-50 flex flex-wrap gap-5 justify-center'>
        <PicturesSection urls={urls} />
      </section>
      <section className='w-1/2 flex flex-col p-5 bg-amber-50 text-sm rounded-lg'>
        <InformationBase
          commonName={product.commonName}
          scientificName={product.scientificName}
          scientistSurnameInitial={product.scientistSurnameInitial}
          family={product.family}
          status={product.status}
          classifications={product.classifications}
        />
        <Description description={descriptionMock} />
      </section>
    </article>
  )
}

interface PicturesSectionProps {
  urls: Array<string>
}

const PicturesSection = ({ urls }: PicturesSectionProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const movePrevious = () => {
    if (selectedIndex > 0) {
      const moveToIndex = selectedIndex - 1
      changeStates(moveToIndex)
    }
  }

  const moveNext = () => {
    if (selectedIndex < urls.length) {
      const moveToIndex = selectedIndex + 1
      changeStates(moveToIndex)
    }
  }

  const moveTo = (index: number) => {
    if (index >= 0 && index < urls.length) {
      changeStates(index)
    }
  }

  const changeStates = (indexOfImage: number) => {
    setLoaded(false)
    setSelectedIndex(indexOfImage)
  }

  return (
    <>
      <div className='flex flex-col flex-wrap-reverse h-96 w-80 gap-2 items-end justify-start'>
        {urls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index}`}
            onClick={() => moveTo(index)}
            className={`max-w-[9em] w-full h-20 cursor-pointer ${selectedIndex === index ? 'border-4 border-black' : ''}`}
          />
        ))}
      </div>
      <div className='flex flex-col items-center gap-2 w-[30em]'>
        <img
          className={`max-w-[30em] h-80 w-full ${loaded ? 'opacity-100 transition-opacity' : 'opacity-0'} `}
          src={urls[selectedIndex]}
          alt={`Image ${selectedIndex}`}
          onLoad={() => setLoaded(true)}
        />
        <div className='flex justify-evenly w-full items-center'>
          <button
            onClick={movePrevious}
            disabled={selectedIndex === 0}
            className={`px-5 py-1 ${selectedIndex === 0 ? 'opacity-0' : 'hover:bg-slate-100'}`}
          >
            <HiOutlineArrowNarrowLeft size='2em' />
          </button>
          <button
            onClick={moveNext}
            disabled={selectedIndex === urls.length - 1}
            className={`px-5 py-1 ${selectedIndex === urls.length - 1 ? 'opacity-0' : 'hover:bg-slate-100'}`}
          >
            <HiOutlineArrowNarrowRight size='2em' />
          </button>
        </div>
      </div>
    </>
  )
}

interface InformationBaseProps {
  commonName: string
  scientificName: string | null
  scientistSurnameInitial: string | null
  family: string | null
  status: StatusType
  classifications: Array<string>
}

const InformationBase = ({ commonName, scientificName, scientistSurnameInitial, family, status, classifications }: InformationBaseProps) => (
  <>
    <h1 className='text-2xl font-medium first-letter:uppercase text-center'>{commonName}</h1>
    <div className='flex gap-10 py-4'>
      <div className='flex flex-col font-medium w-fit'>
        <p>Nombre Cientifico</p>
        <p>Familia</p>
        <p>Estado</p>
        <p>Clasificaciones</p>
      </div>

      <div className='flex flex-col w-fit'>
        <p className='first-letter:uppercase'><i>{scientificName} {scientistSurnameInitial}</i></p>
        <p className='first-letter:uppercase'>{family}</p>
        <p className='first-letter:uppercase'>{status}</p>
        <ul className='list-disc list-inside'>
          {classifications.map(classification =>
            (<li key={classification}>{classification}</li>))}
        </ul>
      </div>
    </div>
  </ >
)

interface DescriptionProps {
  description: string
}

const Description = ({ description }: DescriptionProps) => (
  <div className=' flex flex-col gap-1 h-1/2'>
    <h2 className='font-medium text-lg'>Descripcion</h2>
    <p>{description}</p>
  </div>
)
