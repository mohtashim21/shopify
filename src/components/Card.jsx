import { NavLink } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import { useState } from "react";
import { useEffect } from "react";

const Card = (props) => {
  const firebase = useFirebase();
  const [url, setUrl] = useState(null);

  useEffect(() => {
    firebase.getImageURL(props.imageUrl).then((url) => setUrl(url));
  }, [props.imageUrl]);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-3 my-6">
      <NavLink to={`/productdetail/${props.id}`}>
        {url && <img className="w-72" src={url} alt={props.title} />}
      </NavLink>
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-center mb-2">{props.title}</div>
        <p className="font-bold text-xl mb-2 text-center">{props.price}</p>
      </div>
    </div>
  );
};

export default Card;

