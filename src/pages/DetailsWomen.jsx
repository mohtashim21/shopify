import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import { size } from "../data";

const DetailsWomen = () => {
  const firebase = useFirebase();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [data, setdata] = useState(null);
  const [url, seturl] = useState(null)

  useEffect(() => {
    firebase
      .getProductByIdWomen(id)
      .then((value) => setdata(value.data()));
  }, []);

  useEffect(() => {
    if (data) {
      const imageUrl = data.imageUrl;
      firebase.getImageURL(imageUrl).then((url) => seturl(url));
    }
  }, [data]);

 
  useEffect(() => {
    firebase.getProductByIdWomen(id).then((product) => {
      setProduct(product.data());
    });
  }, [firebase, id]);


  if (!product) {
    return <div>......</div>;
  }

  return (
    <>
    <div>
      <h1>Women</h1>
      <h2>Product: {product.title}</h2>
      <p>Price: {product.price}</p>
      <ul>
        <li>{size[0]}</li>
        <li>{size[1]}</li>
        <li>{size[2]}</li>
        <li>{size[3]}</li>
      </ul>
      <img src={url} alt="no image" />
     
      
    </div>


  </>


  );
};

export default DetailsWomen;