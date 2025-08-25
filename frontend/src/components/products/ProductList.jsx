import { useState } from "react";
import { getallProducts } from "../../hooks/api/product/getallProducts";
import { useNavigate } from "react-router-dom";
import { usegetallProductfilter } from "../../hooks/api/product/getallProducts";
import usefilter from "../../store/useFilter";


const ProductList = ({}) => {
    const [page,setpage]=useState(1);

    const {brandval,categoryval}=usefilter();
    
    const navigate = useNavigate();
    // const {data,isLoading}=getallProducts(page);
    const {data,isLoading}=usegetallProductfilter(brandval,categoryval);

    console.log("data after fetching the filter",data);

    // console.log("Filter value ",filter);

    console.log("The data by getting the usegetallproductfilter",data);

    function pagehandlernext (){
        setpage(prev=>prev+1);
    }

    function pagehandlerprev(){
        setpage((prev)=>{
            Math.max(prev-1,0);
        })
    }

    console.log("Page",page);

    if(isLoading){
        return(
            <div>...Loading </div>
        )
    }

  return (
    <div className="m-2 p-2">
      {/* product card  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-2">
        {data?.map((prod, idx) => (
          <div
           
          onClick={()=>navigate(`${prod._id}`)}
            key={idx}
            className="bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col items-center overflow-hidden"
          >
            {/* Product Image */}
            <div className="w-full h-64 overflow-hidden">
              <img
                src={prod?.images[0]}
                alt={prod?.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="w-full p-4 text-center space-y-2">
              <p className="text-sm text-gray-500">{prod?.categoryId?.name}</p>
              <p className="text-yellow-500 text-sm">⭐ {prod?.rating}</p>

              <p className="text-lg font-semibold text-gray-800 truncate">
                {prod?.name}
              </p>
              <p className="text-md font-bold text-red-600">₹{prod?.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={() => pagehandlerprev()}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Previous
        </button>
        <p>current page {page}</p>
        <button
          onClick={() => pagehandlernext()}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProductList
