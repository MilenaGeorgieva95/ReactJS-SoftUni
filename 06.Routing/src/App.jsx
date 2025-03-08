import { Routes, Route, useLocation } from "react-router";

import Home from "./components/Home";
import Header from "./components/Header";

import "./App.css";
import Catalog from "./components/Catalog";
import Pricing from "./components/Pricing";

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
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      {/* <Home /> */}
    </div>
  );
}

export default App;
