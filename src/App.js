import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Pages/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Blog from './Pages/Blog'
import { Routes, Route } from "react-router-dom";
import Shop from './Pages/Shop';
import Category from './Pages/Category';
import Item from './components/description/Item';
import About from './Pages/About'
import AddtoCart from './components/cart/AddtoCart';
import Policy from './Pages/Policy';
import Login from './components/login/Login';
import SignUp from './components/signp/SignUp';
import Testimonials from './Pages/Testimonials';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/description" element={<Item />} />
        <Route path="/checkout" element={<AddtoCart />} />
        <Route path="/PrivacyPolicy" element={<Policy />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
