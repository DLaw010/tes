import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import Payment from './Components/Payment/Payment';
import About from './Components/About_us/About_us';
import Favorit from './Components/Favorit/Favorit';
import Profile from './Components/Profile/profile';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/Shop' element={<ShopCategory banner={men_banner} category="Shop" />} />
          <Route path='/product'>
            <Route index element={<Product />} />
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/favorit' element={<Favorit />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/about_us' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
