"use client";
import { useState } from "react";
import Image from "next/image";

const ProductClient = ({ product }) => {
  const [selectimage, setSelectimage] = useState(product.images[0]);

  return (
    <div className="p-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Main Image */}
        <div>
          <Image
            src={selectimage}
            alt={product.name}
            width={80}
            height={80}
            className="rounded-lg object-cover w-full"
          />

          {/* Thumbnails */}
          <div className="flex gap-4 mt-4">
            {product.images.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                width={80}
                height={80}
                className={`rounded-md border cursor-pointer ${
                  selectimage === img ? "border-blue-500" : "hover:border-gray-400"
                }`}
                onClick={() => setSelectimage(img)}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-green-600 text-xl font-semibold mb-2">₹{product.price}</p>

          <div className="text-sm text-gray-500 mb-4">
            <p><span className="font-medium">Brand:</span> {product.brand}</p>
            <p><span className="font-medium">Category:</span> {product.categoryId.name}</p>
            <p><span className="font-medium">Rating:</span> ⭐ {product.rating}</p>
            <p><span className="font-medium">Stock:</span> {product.stock}</p>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Buy Now
            </button>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductClient;
