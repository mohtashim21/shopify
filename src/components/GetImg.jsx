import { useFirebase } from "../context/Firebase";
import { useState } from "react";
import { useEffect } from "react";

const GetImg = (props) => {
    const firebase = useFirebase();
    const [url, setUrl] = useState(null);

  useEffect(() => {
    firebase.getImageURL(props.imageUrl).then((url) => setUrl(url));
  }, [props.imageUrl]);

  return (
    <div>
        <img src={url} alt="no image" />
    </div>
  )
}

export default GetImg