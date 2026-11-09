import { useEffect } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Cart from "./pages/Cart.jsx";
import Hero from "./pages/Hero.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import Register from "./pages/Resgister.jsx";
import SearchItems from "./pages/SearchItems.jsx";

const pageSEO = {
  "/": {
    title: "Folly Market | Fashion, Clothing & Accessories",
    description: "Discover clothing, bags and accessories at Folly Market. Explore everyday fashion and browse our curated collection."
  },
  "/products": {
    title: "Shop Fashion & Accessories | Folly Market",
    description: "Browse the Folly Market collection of clothing, bags and accessories. Find styles for your everyday wardrobe."
  },
  "/about": {
    title: "About Folly Market | Our Story",
    description: "Learn more about Folly Market and our commitment to stylish, affordable clothing and customer service."
  },
  "/contact": {
    title: "Contact Folly Market | Customer Support",
    description: "Get in touch with Folly Market for product questions, customer support and business enquiries."
  },
  "/cart": {
    title: "Your Shopping Cart | Folly Market",
    description: "Review the products in your Folly Market shopping cart."
  },
  "/searchproduct": {
    title: "Search Products | Folly Market",
    description: "Search the Folly Market collection for clothing, bags and accessories."
  },
  "/signup": {
    title: "Create an Account | Folly Market",
    description: "Create your Folly Market account."
  }
};

const RouteSEO = () => {
  const location = useLocation();

  useEffect(() => {
    const page = pageSEO[location.pathname] || {
      title: location.pathname.startsWith("/folly/") ? "Product Details | Folly Market" : "Folly Market | Fashion & Accessories",
      description: "Explore fashion, clothing and accessories at Folly Market."
    };

    document.title = page.title;

    const setMeta = (attribute, key, content) => {
      let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    setMeta("name", "description", page.description);
    setMeta("property", "og:title", page.title);
    setMeta("property", "og:description", page.description);
    setMeta("property", "og:url", `https://follymarket.vercel.app${location.pathname}`);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `https://follymarket.vercel.app${location.pathname}`;
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <RouteSEO />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/folly/:id" element={<ProductPage />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/searchproduct" element={<SearchItems />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
