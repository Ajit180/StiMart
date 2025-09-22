import { getProductbyId } from '../../hooks/api/product/getProductbyId';
import useAuth from '../../store/useAuth';
import { useNavigate } from 'react-router-dom';


const CartPage = () => {

  const{token}=useAuth();

  const navigate = useNavigate();

    const id=localStorage.getItem("ProductId")
    console.log("The value of id is ",id);

    const {data,isLoading,isError,isSuccess}=getProductbyId(id);
      console.log('Fetched data:', data); // Check what’s inside
  return (
    <div className="container mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Product Details */}
      <div className="lg:col-span-2">
        {/* Cart Header */}
        <div className="grid grid-cols-4 text-gray-600 font-semibold border-b pb-3">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>

        {/* Cart Item */}

        
          <div className="grid grid-cols-4 items-center border-b py-4">
            {/* Product Info */}
            <div className="md:flex md:items-center md:gap-4 flex-col">
              <img
                src={data?.images[0]}
                alt="monitor"
                className="h-16 w-20 object-cover"
              />
              <p className="font-medium">{data?.name}</p>
            </div>

            {/* Price */}
            <p className="text-gray-700">{data?.price}</p>

            {/* Quantity */}
            <select className="border rounded-md px-2 py-1 w-16">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>

            {/* Subtotal */}
            <p className="font-semibold">{data?.price}</p> 
            {/* //logic to write here about the quantity * prod */}
          </div>


        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          <button className="border border-gray-400 px-5 py-2 rounded hover:bg-gray-100">
            Return to Shop
          </button>
          <button className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600">
            Update Cart
          </button>
        </div>
      </div>

      {/* Checkout Section */}
      <div>
        {/* Coupon Section */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Coupon Code"
            className="flex-1 border px-4 py-2 rounded"
          />
          <button className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total Box */}
        <div className="border p-6 rounded-md shadow-sm">
          <h1 className="text-xl font-bold mb-4">Cart Total</h1>

          <div className="flex justify-between border-b py-2">
            <p>Subtotal</p>
            <p>$1700</p>
          </div>
          <div className="flex justify-between border-b py-2">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between py-2 font-bold">
            <p>Total</p>
            <p>$1750</p>
          </div>

          <button onClick={()=>navigate('/checkout')} className="w-full mt-5 bg-red-500 text-white py-3 rounded hover:bg-red-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage
