import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Nav from "./components/Navbar";
import Detail from "./pages/Detail";
import ViewOrder from "./pages/ViewOrder";
import Products from "./pages/Products";
import AddHomeMen from "./pages/AddHomeMen";
import AddHomeWomen from "./pages/AddHomeWomen";
import AddMen from "./pages/AddMen";
import AddWomen from "./pages/AddWomen";
import Categories from "./pages/Categories";
import MenPage from "./pages/MenPage";
import WomenPage from "./pages/WomenPage";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/addhomemen" element={<AddHomeMen />} />
        <Route path="/addhomewomen" element={<AddHomeWomen />} />
        <Route path="/addmen" element={<AddMen />} />
        <Route path="/addwomen" element={<AddWomen />} />
        <Route path="/menpage" element={<MenPage />} />
        <Route path="/womenpage" element={<WomenPage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/product/view/:productId" element={<Detail />} />
        <Route path="/orders" element={<ViewOrder />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} /> 
      </Routes>
    </>
  );
};

export default App;
