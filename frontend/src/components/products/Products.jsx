

const Products = () => {
  return (
    <div className="px-8 py-10 bg-gray-50">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
        <p className="text-gray-600 mt-2">Check out our latest arrivals</p>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
          <img
            src=""
            alt="Product 1"
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <p className="text-lg font-semibold">Product Name</p>
          <p className="text-blue-600 font-bold">₹999</p>
          <p className="text-yellow-500">⭐⭐⭐⭐☆</p>
        </div>

        {/* Repeat Cards */}
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
          <img
            src=""
            alt="Product 2"
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <p className="text-lg font-semibold">Product Name</p>
          <p className="text-blue-600 font-bold">₹1299</p>
          <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
          <img
            src=""
            alt="Product 3"
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <p className="text-lg font-semibold">Product Name</p>
          <p className="text-blue-600 font-bold">₹799</p>
          <p className="text-yellow-500">⭐⭐⭐☆☆</p>
        </div>
      </div>

      {/* View All Button */}
      <div className="mt-10 text-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Products;
