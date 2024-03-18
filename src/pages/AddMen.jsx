import React, { useState } from "react";
import { useFirebase } from "../context/Firebase";

const AddMen = () => {
  const firebase = useFirebase();

  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const [img, setimg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await firebase.createProductsMen(title, price, img);
  };

  const reset = () => {
    window.location.reload();
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Add Product Form Men
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Enter Product title
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => settitle(e.target.value)}
                value={title}
                id="email"
                name="title"
                type="text"
                autoComplete="off"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Enter Product price
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setprice(e.target.value)}
                value={price}
                id="email"
                name="title"
                type="text"
                autoComplete="off"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Add Image
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setimg(e.target.files[0])}
                id="email"
                name="title"
                type="file"
                autoComplete="off"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create
            </button>
            <button
              onClick={reset}
              type="click"
              className="my-3 flex w-20 justify-center ml-[9rem] rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMen;
