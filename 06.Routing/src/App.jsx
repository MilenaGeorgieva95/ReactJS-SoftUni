import { Routes, Route, useLocation } from "react-router";

import Home from "./components/Home";
import Header from "./components/Header";

import "./App.css";
import Catalog from "./components/Catalog";
import Pricing from "./components/Pricing";
import NotFound from "./components/404";
import ProductDetails from "./components/ProductDetails";
import Contacts from "./components/Contacts";

function App() {
  // const location = useLocation();
  // console.log(location.pathname);

  return (
    <div className="bg-white">
      <Header />
      {/* {location.pathname === "/catalog" ? <h1>Catalog</h1> : ""} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:productId" element={<ProductDetails />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Home /> */}
    </div>
  );
}

export default App;
