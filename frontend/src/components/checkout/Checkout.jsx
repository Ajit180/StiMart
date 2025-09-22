import { useNavigate } from "react-router-dom";

const Checkout = () => {
   
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left - Billing Details */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">
            Billing Details
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* First Name */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-600">
                First Name *
              </label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            {/* Company */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-600">
                Company Name
              </label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            {/* Street Address */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-600">
                Street Address *
              </label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            {/* Apartment */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-600">
                Apartment, floor, etc (Optional)
              </label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Town / City *
              </label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Phone Number *
              </label>
              <input
                type="number"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-600">
                Email Address *
              </label>
              <input
                type="email"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            {/* Save Info */}
            <div className="col-span-2 flex items-center space-x-2 mt-2">
              <input type="checkbox" className="h-4 w-4 text-red-600" />
              <span className="text-sm text-gray-600">
                Save this information for faster checkout next time
              </span>
            </div>
          </form>
        </div>

        {/* Right - Order Summary */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">
            Your Order
          </h2>

          {/* Product list */}
          <div className="space-y-4 border-b border-gray-200 pb-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img src="/monitor.png" alt="monitor" className="h-10 w-10 rounded" />
                <p className="text-gray-700">LCD Monitor</p>
              </div>
              <p className="font-medium text-gray-900">$650</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img src="/gamepad.png" alt="gamepad" className="h-10 w-10 rounded" />
                <p className="text-gray-700">Hi Gamepad</p>
              </div>
              <p className="font-medium text-gray-900">$1100</p>
            </div>
          </div>

          {/* Subtotal */}
          <div className="flex justify-between py-3 border-b border-gray-200">
            <p className="text-gray-600">Subtotal</p>
            <p className="font-semibold text-gray-800">$1750</p>
          </div>

          {/* Shipping */}
          <div className="flex justify-between py-3 border-b border-gray-200">
            <p className="text-gray-600">Shipping</p>
            <p className="font-semibold text-green-600">Free</p>
          </div>

          {/* Total */}
          <div className="flex justify-between py-4">
            <p className="text-lg font-bold text-gray-800">Total</p>
            <p className="text-lg font-bold text-red-600">$1750</p>
          </div>

          {/* Payment Options */}
          <div className="space-y-3 mt-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="payment" className="text-red-500" />
              <span className="text-gray-700">Bank Transfer</span>
              <img src="/visa.png" className="h-5 ml-2" alt="visa" />
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="payment" className="text-red-500" />
              <span className="text-gray-700">Cash on Delivery</span>
            </label>
          </div>

          {/* Coupon Code */}
          <div className="flex items-center gap-2 mt-6">
            <input
              type="text"
              placeholder="Coupon Code"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
              Apply
            </button>
          </div>

          {/* Place Order Button */}
          <button onClick={()=>navigate('/checkout')} className="w-full mt-6 bg-red-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-red-700 transition">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
