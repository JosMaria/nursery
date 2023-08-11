import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  SingleProduct,
  RepertoryPage,
  NewsPage,
  SingleNews
} from '../pages'
import { Layout } from '../components'
import { Details, Notes, TechnicalSheet } from '../pages/SingleProduct/components'

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={
          <div className='h-screen max-md:bg-orange-500'>
            Contenido
          </div>} />
        {/* <Route index element={<CatalogPage />} /> */}
        {/* <Route index element={<CreatePlant />} /> */}
        <Route path='products/:id' element={<SingleProduct />}>
          <Route index element={<TechnicalSheet />}/>
          <Route path='details' element={<Details />}/> md:bg-blue-400 lg:bg-violet-700 xl:bg-green-700 2xl:bg-red-600
          <Route path='notes' element={<Notes />}/>
        </Route>
        
        <Route path='list' element={<RepertoryPage />} />
        <Route path='news' element={<NewsPage />} />
        <Route path='news/:id' element={<SingleNews />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
