import { useAddProductToCart } from "../../hooks/api/cart/useaddProductToCart";
import useAuth from "../../store/useAuth";


const useCartSync = () => {

    const { token } = useAuth();
    const { addproductToCartmutate } = useAddProductToCart();

      const CartSync = async (isSuccess) => {
        try {
      if (isSuccess) {
        
        const id = localStorage.getItem("ProductId");
        if (!id) throw new Error("No ProductId found in localStorage");
        await addproductToCartmutate({
          productId: id,
          token: token,
        });

         console.log("Cart synced successfully ✅");
      }
    } catch (error) {
      console.log("Error while sync the cart", error);
    }
  };

  return {CartSync};
};


export default useCartSync;
