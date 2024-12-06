import image1 from "../assets/Hello world.jpeg";

const Products = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-150">
        {/* Product Image */}
        <img
          src={image1}
          alt="Product"
          className="w-full h-48 object-cover"
        />

        {/* Product Content */}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">Product Name</h2>
          <p className="text-gray-600 mt-2 text-sm">
            This is a short description of the product. It highlights key
            features and benefits in a concise way.
          </p>

          {/* Buy Now Button */}
          <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
