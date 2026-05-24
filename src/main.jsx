//import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ShopContext from "./components/ShopContext";

createRoot(document.getElementById("root")).render(
  
    <ShopContext>
      <App />
    </ShopContext>

);
