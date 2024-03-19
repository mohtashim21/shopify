
import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import Card from "../components/Card";
import video from "../assets/video/gif.mp4";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Home = () => {
  const firebase = useFirebase();

  const [productMens, setProductMens] = useState([]);
  const [productWomens, setProductWomen] = useState([]);

  useEffect(() => {
    firebase.listHomeMen().then((products) => setProductMens(products.docs));
    firebase.listHomeWomen().then((products) => setProductWomen(products.docs));
  }, []);

  return (
    <>
      <div>
        <video width="100%" height="80%" autoPlay loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div
        className="flex flex-wrap my-[2%] mx-1"
        style={{ background: "#1C1C1C", color: "wheat" }}
      >
        {productMens.map((product) => (
          <NavLink key={product.id} to={`/productdetail/${product.id}`}>
            <div className="flex justify-center ml-[20px] mr-[10px] border-r-8 pr-5 border-slate-50">
              <Card size={product.size} id={product.id} {...product.data()} />
            </div>
          </NavLink>
        ))}
      </div>

      <div
        className="flex flex-wrap my-[2%] mx-1"
        style={{ background: "#1C1C1C", color: "wheat", borderRadius: "1rem" }}
      >
        {productWomens.map((product) => (
          <NavLink key={product.id} to={`/productdetail/${product.id}`}>
            <div className="flex justify-center ml-[20px] mr-[10px] border-r-8 pr-5 border-slate-50">
              <Card size={product.size} id={product.id} {...product.data()} />
            </div>
          </NavLink>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Home;



