import { Route, Routes } from 'react-router-dom';
import ProductPage from '../ProductPage';
import TechnicalSheetView from '../views/TechnicalSheetView';
import DetailsView from '../views/DetailsView';

const ProductRouter = () => (
  <Routes>
    <Route element={<ProductPage />}>
      <Route index element={<TechnicalSheetView />} />
      <Route path='details' element={<DetailsView />} />
      <Route path='*' element={<p>Not found product view</p>} />
    </Route>
  </Routes>
);

export default ProductRouter;
