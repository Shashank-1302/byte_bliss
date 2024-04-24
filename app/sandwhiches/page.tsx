import React from 'react';

function SandwichesAndBurgersMenu() {
  return (
    <div className="bg-cover bg-center bg-fixed" style={{backgroundImage: "url('Templates/images/bgg.jpg')"}}>
      <img src="Templates/images/LOGOBB.png" alt="Logo" className="absolute top-0 left-0 h-48 z-50" />
      <div className="container mx-auto">
        <div className="content">
          <div className="container menu-container">
            <h2 className="text-center text-white text-4xl font-bold mb-10">Sandwiches and Burgers Menu</h2>
            
            {/* Sandwich items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Masala Sandwich */}
              <div className="menu-item bg-gray-200 bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Masala Sandwich</h3>
                <p className="text-sm text-gray-800 mb-4">Spicy and flavorful sandwich with a masala filling, perfect for a quick snack.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Paneer Sandwich */}
              <div className="menu-item bg-gray-200 bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Paneer Sandwich</h3>
                <p className="text-sm text-gray-800 mb-4">Sandwich filled with delicious paneer cubes, a vegetarian delight.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Cheese Chutney Sandwich */}
              <div className="menu-item bg-gray-200 bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Cheese Chutney Sandwich</h3>
                <p className="text-sm text-gray-800 mb-4">A classic sandwich with cheese and tangy chutney, a burst of flavors in every bite.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Veg Grilled Sandwich */}
              <div className="menu-item bg-gray-200 bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Veg Grilled Sandwich</h3>
                <p className="text-sm text-gray-800 mb-4">Healthy and tasty sandwich with a variety of vegetables, grilled to perfection.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Cheese Grilled Sandwich */}
              <div className="menu-item bg-gray-200 bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Cheese Grilled Sandwich</h3>
                <p className="text-sm text-gray-800 mb-4">Indulgent sandwich with gooey melted cheese, a treat for cheese lovers.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>
            </div>

            {/* Burger items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Veg Burger */}
              <div className="menu-item bg-gray-200 bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Veg Burger</h3>
                <p className="text-sm text-gray-800 mb-4">Classic vegetarian burger with a patty made from mixed vegetables.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Aloo Tikki Burger */}
              <div className="menu-item bg-gray-200 bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Aloo Tikki Burger</h3>
                <p className="text-sm text-gray-800 mb-4">Burger featuring a crispy potato patty, a popular street food choice.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Veg Cheese Burger */}
              <div className="menu-item bg-gray-200 bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Veg Cheese Burger</h3>
                <p className="text-sm text-gray-800 mb-4">Delicious burger loaded with cheese, perfect for cheese enthusiasts.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SandwichesAndBurgersMenu;
