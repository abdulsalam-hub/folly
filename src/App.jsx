

import Cart from './pages/Cart.jsx'
import Hero from "./pages/Hero";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

import Home from "./pages/Home.jsx";


import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductPage from "./pages/ProductPage.jsx";
import Register from "./pages/Resgister.jsx";
import SearchItems from "./pages/SearchItems.jsx";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/folly/:id" element={<ProductPage />} />
          <Route path="signup" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
         
          <Route path="/searchproduct" element={<SearchItems/> } />
        </Routes>
      </Router>
    </>
  );
}
export default App;
