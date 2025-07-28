
const Footer = () => {
  return (
    <footer className="bg-black text-white px-10 py-12">
      {/* Grid Layout for Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {/* Column 1: Branding & Subscribe */}
        <div>
          <h1 className="text-2xl font-bold mb-2">Exclusiv</h1>
          <p className="mb-1">Subscribe</p>
          <p className="text-sm text-gray-400 mb-4">
            Get 10% off on your order
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="px-3 py-2 rounded bg-white text-black text-sm w-full"
            />
            <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 text-sm">
              Send
            </button>
          </div>
        </div>

        {/* Column 2: Support */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Support</h2>
          <p className="text-sm text-gray-400">Nashik, Maharashtra, India</p>
          <p className="text-sm text-gray-400">user@admin.com</p>
          <p className="text-sm text-gray-400">+91 9000000300</p>
        </div>

        {/* Column 3: Account */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Account</h2>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Column 4: Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 5: App Download */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Download App</h2>
          <p className="text-sm text-gray-400 mb-2">Save $3 for new users</p>
          <div className="flex gap-2">
            <img src="" alt="QR Code" className="w-16 h-16 bg-white rounded" />
            <div className="flex flex-col gap-2">
              <img
                src=""
                alt="Google Play"
                className="w-24 h-8 bg-white rounded"
              />
              <img
                src=""
                alt="App Store"
                className="w-24 h-8 bg-white rounded"
              />
            </div>
          </div>
        </div>

        {/* Column 6: Social Icons */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <p className="text-sm text-gray-500">
          © 2025 Stimart. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
