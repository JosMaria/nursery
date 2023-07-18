import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  CatalogPage,
  SingleProduct,
  RepertoryPage,
  NewsPage,
  SingleNews
} from '../pages'
import { Layout } from '../components'

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<CatalogPage />} />

        <Route path='products/:id' element={<SingleProduct />}>
          <Route index element={<h1>Ficha tecnica</h1>}/>
          <Route path='details' element={<h1>Detalles</h1>}/>
          <Route path='notes' element={<h1>Notas</h1>}/>
        </Route>
        
        <Route path='list' element={<RepertoryPage />} />
        <Route path='news' element={<NewsPage />} />
        <Route path='news/:id' element={<SingleNews />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
