import { getallProducts } from "../../hooks/api/product/getallProducts";
import { useNavigate } from "react-router-dom";

const Products = () => {
 
   const navigate = useNavigate();

  const {data,isLoading,isError}= getallProducts(1);

  console.log("getallproduct Order's is ",data);

 if(isLoading){
  return(<div>....Loading Please Wait</div>)
 }


  return (
    <div className="px-8 py-10 bg-gray-50">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
        <p className="text-gray-600 mt-2">Check out our latest arrivals</p>
      </div>
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
      {data?.products.map((prod,idx) => (
        
          <div key={idx} 
          className="bg-white p-3 rounded-lg shadow hover:shadow-md transition"
          onClick={()=>navigate(`${prod._id}`)}
          >
            <img
              src={prod?.images[1]}
              alt="Product 1"
              className="w-full h-64 sm:h-72 md:h-80  object-cover rounded-md"
            />
            <p className="text-lg font-semibold">{prod?.name}</p>
            <p className="text-blue-600 font-bold">{prod?.price}</p>
            <p className="text-yellow-500">{prod?.rating}</p>
          </div>
      
      ))}
        </div>
      <div className="mt-10 text-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Products;
