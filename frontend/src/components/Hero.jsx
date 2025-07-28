const Hero = () => {
  return (
    <div className="flex px-8 py-6 bg-white">
      {/* Left Side: Categories */}
      <div className="w-1/4 pr-6">
        <ul className="space-y-3 text-gray-700 font-medium">
          <li>Category name 1</li>
          <li>Category name 2</li>
          <li>Category name 3</li>
          <li>Category name 4</li>
          <li>Category name 5</li>
        </ul>
      </div>

      {/* Vertical Border */}
      <div className="w-px bg-gray-300 mx-6"></div>

      {/* Right Side: Hero Image Slider */}
      <div className="flex-1">
        <img
          src="slider-image.jpg"
          alt="Slider"
          className="w-full h-auto rounded-md shadow"
        />
      </div>
    </div>
  );
};

export default Hero;
