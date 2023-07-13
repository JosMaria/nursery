import { BrowserRouter, Route } from 'react-router-dom'
import { PublicRoutes } from './routes'
import { RoutesWithNotFound } from '../utils'
import {
  Home,
  CatalogPage,
  SingleProduct,
  RepertoryPage,
  NewsPage,
  SingleNews
} from '../pages'

export const AppRoutes = () => (
  <BrowserRouter>
    <RoutesWithNotFound>
      <Route path='/' element={<Home />}>
        <Route index element={<CatalogPage />} />
        <Route path={PublicRoutes.SINGLE_PRODUCT} element={<SingleProduct />} />
        <Route path={PublicRoutes.REPERTORY} element={<RepertoryPage />} />
        <Route path={PublicRoutes.NEWS} element={<NewsPage />} />
        <Route path={PublicRoutes.SINGLE_NEWS} element={<SingleNews />} />
      </Route>
    </RoutesWithNotFound>
  </BrowserRouter>
)
