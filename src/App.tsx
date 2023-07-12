import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CatalogPage, Home, NewsPage, RepertoryPage, SingleNews, SingleProduct } from './pages';
import { PublicRoutes } from './routes';

export const App = () => (
  <div className='flex flex-col h-screen'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<CatalogPage />} />
          <Route path={PublicRoutes.SINGLE_PRODUCT} element={<SingleProduct />} />
          <Route path={PublicRoutes.REPERTORY} element={<RepertoryPage />} />
          <Route path={PublicRoutes.NEWS} element={<NewsPage />} />
          <Route path={PublicRoutes.SINGLE_NEWS} element={<SingleNews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>

)
