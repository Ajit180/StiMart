import { useEffect } from "react";
import { useAddProductToCart } from "../../hooks/api/cart/useaddProductToCart";
import useAuth from "../../store/useAuth";

const AddProductToCart = ({id}) => {

    const{user,token}=useAuth();

    const {isSuccess,isError,isPending,addproductToCartmutate}=useAddProductToCart();

   function saveProductIdLocal(id){
      localStorage.setItem("ProductId",id);
  }


  useEffect(()=>{

  },[])

  return (
    <div>
      <a
        href=""
        className="inline-block bg-[#ff523b] text-white p-[10px]
                m-[10px] rounded-[30px] cursor-pointer"
                onClick={()=>saveProductIdLocal(id)}
      >
        Add to Cart 
      </a>
    </div>
  );
};

export default AddProductToCart;
