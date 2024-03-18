import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import { size } from "../data";

const DetailsMen = () => {
  const firebase = useFirebase();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [data, setdata] = useState(null);
  const [url, seturl] = useState(null)

  
  useEffect(() => {
    firebase
      .getProductByIdMen(id)
      .then((value) => setdata(value.data()));
  }, []);

  useEffect(() => {
    if (data) {
      const imageUrl = data.imageUrl;
      firebase.getImageURL(imageUrl).then((url) => seturl(url));
    }
  }, [data]);

  useEffect(() => {
    firebase.getProductByIdMen(id).then((product) => {
      setProduct(product.data());
    });
  }, [firebase, id]);


  if (!product) {
    return <div>.......</div>;
  }

  return (
    <>
    <div className="bg-gray-300 flex ">
      <div className="bg-red-300 w-64 flex flex-col ml-3">
    <img src={url} className="w-64 border-2 border-black" alt="no image" />
      <h1 className="text-2xl">{product.title}</h1>
      </div>
      <div>
      <p className="text-xl">₹{product.price}</p>
      <ul className="flex gap-2 text-lg">
        <li>{size[0]}</li>
        <li>{size[1]}</li>
        <li>{size[2]}</li>
        <li>{size[3]}</li>
      </ul>
      </div>
      
    </div>


  </>


  );
};

export default DetailsMen;