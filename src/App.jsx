import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/includes/Header';
import Footer from './components/includes/Footer';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
import Wishlist from './components/Wishlist';
import NotFound from './components/NotFound';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<ProductDetail />} />
          <Route path="services" element={<Services/>} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact/>} />
          <Route path="cart" element={<Cart/>} />
          <Route path="wishlist" element={<Wishlist/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
