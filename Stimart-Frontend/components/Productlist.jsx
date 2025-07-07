"use client";
import React from "react";
import Image from "next/image";
import useProductFetch from "@/hooks/api/product/useProductFetch";
import Link from "next/link";

const ProductList = () => {
  const { data, isLoading, isError, isSuccess, error } = useProductFetch();

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const products = data?.data || [];

  console.log("Products list",products);

  return (
    <div className="py-10 px-4 md:px-10">
      <h2 className="text-2xl font-semibold mb-6">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
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
    </div>
  );
};

export default ProductList;
