import { Route, Routes } from 'react-router-dom'
import MainLayout from './pages/Layout/MainLayout'
import Home from './pages/Home/Home'
import Signup from './pages/Signup/Signup'
import Signin from './pages/Signin/Signin'
import ProductDetails from './pages/Product/ProductDetails'
import ProtectedCom from './components/ProtectedCom/ProtectedCom'
import ProtectedCart from './pages/Cart/ProtectedCart'
import CartPage from './pages/Cart/Cartpage'
import ProductPage from './pages/Product/ProductPage'
import Checkout from './components/checkout/Checkout'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route
          path="/pcart"
          element={
            <ProtectedCom>
              <ProtectedCart />
            </ProtectedCom>
          }
        />
          <Route
        path="/checkout"
        element={
          <ProtectedCom>
            <Checkout />
          </ProtectedCom>
        }
      />

      </Route>
     
    </Routes>
  );
}

export default AppRoutes
