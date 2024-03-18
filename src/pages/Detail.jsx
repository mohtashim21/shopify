import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";

const Detail = () => {
  const params = useParams();
  const firebase = useFirebase();

  // const [qty, setQty] = useState(1);
  const [data, setdata] = useState(null);
  const [url, seturl] = useState(null);

  console.log(id);
  console.log(data);

  useEffect(() => {
    firebase
      .getProductByIdMen(params.productId)
      .then((value) => setdata(value.data()));
  }, []);

  useEffect(() => {
    if (data) {
      const imageUrl = data.imageUrl;
      firebase.getImageURL(imageUrl).then((url) => seturl(url));
    }
  }, [data]);

  // const placeOrderMen = async () => {
  //   const result = await firebase.placeOrderMen(params.productId, qty);
  //   console.log('Order Placed', result);
  // }

  if (data == null) return <h1>Loading...</h1>;

  return (
    <div>
      <h1 className="text-2xl">{data.title}</h1>
      <img src={url} className="h-96" alt="" />
      <h1 className="text-2xl">Details</h1>
      <h1 className="text-2xl">Price: Rs. {data.price}</h1>
      {/* <ul className="flex gap-1 my-2">
        <li><button className="w-12 rounded-md bg-red-500 px-3 py-1 text-lg font-semibold text-slate-50">{data.size[0]}</button></li>
        <li><button className="w-12 rounded-md bg-red-500 px-3 py-1 text-lg font-semibold text-slate-50">{data.size[1]}</button></li>
        <li><button className="w-12 rounded-md bg-red-500 px-3 py-1 text-lg font-semibold text-slate-50">{data.size[2]}</button></li>
        <li><button className="w-12 rounded-md bg-red-500 px-3 py-1 text-lg font-semibold text-slate-50">{data.size[3]}</button></li>
      </ul> */}
      {/* <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Qty
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setQty(e.target.value)}
                value={qty}
                id="email"
                name="email"
                type="Number"
                autoComplete="off"
                required
                className="block rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div> */}
      {/* <button onClick={placeOrder} className=" mt-2 flex w-24 justify-center rounded-md bg-green-600 px-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Buy Now</button> */}
    </div>

   
  );
};

export default Detail;
