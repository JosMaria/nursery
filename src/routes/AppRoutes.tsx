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
        <Route path='/' element={<CatalogPage />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='/list' element={<RepertoryPage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/news/:id' element={<SingleNews />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
