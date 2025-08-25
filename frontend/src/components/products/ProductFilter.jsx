import { useState } from "react";
import { getCategory } from "../../hooks/api/category/useGetCategory"
import { getallbrand } from "../../hooks/api/product/getallProducts";
import usefilter from "../../store/useFilter";

const ProductFilter = () => {

    // const [brandcheck , setBrandcheck]=useState([]);
    // const [categorycheck,setCategory]=useState([]);

    const {toggleBrand,toggleCategory,resetFilters,brandval,categoryval}=usefilter();


    console.log(`The brand value ${brandval} and the category value is ${categoryval}`)

    const {data,isLoading}=getCategory();
    const {data:brand}=getallbrand();
    // console.log("Brand value is ",brand);
 
    // const togglecat =(e)=>{
    //     const {value,checked}=e.target;
    //     setCategory((prev)=>
    //     checked?[...prev,value]:prev.filter((v)=>v!=value))
    // }

    // const togglebrand =(e)=>{
    //     const {value,checked}=e.target;
    //     setBrandcheck((prev)=>
    //     checked?[...prev,value]:prev.filter((v)=>v!=value))
    // }

        const handleBrandChange = (e) => {
          const { value, checked } = e.target;
          toggleBrand(value, checked);
        };

        const handleCategoryChange = (e) => {
          const { value, checked } = e.target;
          toggleCategory(value, checked);
        };

    
  
  return (
<div className="bg-white shadow-md rounded-lg p-4 space-y-6">
  {/* Header */}
  <div className="flex items-center justify-between">
    <h1 className="text-lg font-semibold text-gray-800 hover:cursor-pointer">Filters</h1>
    <button className="text-sm text-red-500 hover:underline"  onClick={resetFilters}>Clear Filters</button>
  </div>

  {/* Category */}
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">Category</label>
    {data?.category.map((cat,idx)=>(
        <div key={idx} className="flex items-center space-x-2">
             <input 
              type="checkbox"
              value={cat?.name}
              onChange={handleCategoryChange}
              checked={categoryval.includes(cat?.name)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
             />
             <label className="text-sm">{cat?.name}</label>
        </div>
    ))}
    
  </div>

  {/* Brand  */}
     <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">Brand</label>
    {brand?.products.map((brand,idx)=>(
        <div key={idx} className="flex items-center space-x-2">
             <input 
              type="checkbox"
              value={brand?.brand}
              onChange={handleBrandChange}
              checked={brandval.includes(brand?.brand)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
             />
             <label className="text-sm">{brand?.brand}</label>
        </div>
    ))}
    
  </div>
</div>

  )
}

export default ProductFilter
