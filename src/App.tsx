import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/HomePage';
import HeaderComponent from './components/Header';
import CartComponent from './components/Cart';
import ProductDesctiptionComponent from './components/ProductDescription';
import OrderListingComponent from './components/OrdersListing';
import ListProducts from './components/products';
import ShopContextProvider from './context/ShopContext';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <ShopContextProvider>
        <Routes>
          <Route path='/' element={<HomeComponent />}></Route>
          <Route path='/cart' element={<CartComponent />}></Route>
          <Route path='/productView' element={<ProductDesctiptionComponent />}></Route>
          <Route path='/orders' element={<OrderListingComponent />}></Route>
          <Route path='/products' element={<ListProducts />}></Route>
        </Routes>
      </ShopContextProvider>
    </BrowserRouter>
  );
}

export default App;
