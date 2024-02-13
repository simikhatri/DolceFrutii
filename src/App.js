import './App.css';
import Contact from './Pages/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Blog from './Pages/Blog'
import { Routes, Route } from "react-router-dom";
import Shop from './Pages/Shop';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
