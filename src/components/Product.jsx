import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const API_URL = "https://fakestoreapi.com";

const Product = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/products`)
      .then((res) => (console.log(res.data), setData(res.data)))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);



  const productItems = data?.map((pro) => (
    <div
      key={pro.id}
      className="relative flex w-full flex-col justify-between overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
    >
      <div
        className="mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
      >
        <img className="object-contain w-full h-full" src={pro.image} alt="product image" />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {pro.price<600 ? '50% OFF' : ""}
        </span>
      </div>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">{pro.title}</h5>
        </a>
        <ProductCard pro={pro} />
        <div
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to cart
        </div>
      </div>
    </div>
  ));
  return (
    <>
      {/* <h2>Products</h2> */}
      {loading && <p className="text-center text-3xl"> Loading...</p>}
      <div className="container grid grid-cols-4 gap-3 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:mx-auto px-10">{productItems}</div>
    </>
  );
};

export default Product;
