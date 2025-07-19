"use client";

import useProductFetch from "@/hooks/api/product/useProductFetch";
import Link from "next/link";
import { useState } from "react";
import React from "react";

const ProductList = () => {
  const [page,setpage]=useState(1);
  const { data, isLoading, isError, error } = useProductFetch(page);

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const {products, totalpages} = data?.data || {};

  console.log("Products list",products);

  return (
    <div className="py-10 px-4 md:px-10">
      <h2 className="text-2xl font-semibold mb-6">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product) => (
           <Link key={product._id} href={`/Products/${product._id}`}>
          <div key={product._id} className="bg-white rounded-xl shadow-md p-4">
            <img
              src={product.images[0]}
              alt={product.name}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-[200px]"
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{product.brand}</p>
              <p className="text-green-600 font-bold mt-2">₹{product.price}</p>
              <p className="text-sm text-yellow-600 mt-1">⭐ {product.rating}</p>
              <p className="text-xs text-gray-500 mt-1">{product.categoryId.name}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
      {/* pagination */}
      <div className="flex justify-center gap-4 mt-8">
         <button className="text-black px-4 py-2 bg-blue-500 rounded hover:bg-blue-400 disabled:opacity-50" disabled={page === 1} onClick={()=>setpage((prev)=>Math.max(prev-1,1))}>
          Prev
         </button>
         <span className="px-4 py-2 font-medium">{page}</span>
         <button className=" text-black px-4 py-2 bg-green-700 rounded hover:bg-green-900 disabled:opacity-50"  disabled={page === totalpages} onClick={()=>setpage((prev)=>Math.max(prev+1,1))}>Next</button>
      </div>
    </div>
  );
};

export default ProductList;
