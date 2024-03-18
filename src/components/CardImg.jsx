import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";

const CardImg = (props) => {
  const firebase = useFirebase();

  const [url, setUrl] = useState(null);

  useEffect(() => {
    firebase.getImageURL(props.imageUrl).then((url) => setUrl(url));
  }, []);

  console.log(props);

  return (
    <>

<div className="max-w-sm rounded overflow-hidden shadow-lg mx-3 my-6">
  <img className="w-72" src={url}/>
</div>

      
    </>
  );
};

export default CardImg;
