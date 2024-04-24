import React from 'react';

function SnacksMenu() {
  return (
    <div className="bg-cover bg-center bg-fixed" style={{backgroundImage: "url('Templates/images/bgg.jpg')"}}>
      <img src="Templates/images/LOGOBB.png" alt="Logo" className="absolute top-0 left-0 h-48 z-50" />
      <div className="container mx-auto">
        <div className="content">
          <div className="container menu-container">
            <h2 className="text-center text-white text-4xl font-bold mb-10">Indian Snacks Menu</h2>
            
            {/* Snacks items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Pani Puri */}
              <div className="menu-item bg-gray-200 bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Pani Puri</h3>
                <p className="text-sm text-gray-800 mb-4">A popular Indian street food consisting of hollow puris filled with spicy tangy water.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Bhel Puri */}
              <div className="menu-item bg-gray-200 bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Bhel Puri</h3>
                <p className="text-sm text-gray-800 mb-4">A savory snack made with puffed rice, vegetables, and tangy tamarind sauce.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Samosa */}
              <div className="menu-item bg-gray-200 bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Samosa</h3>
                <p className="text-sm text-gray-800 mb-4">A popular Indian snack with a crispy pastry shell filled with spiced potatoes and peas.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Bake Samosa */}
              <div className="menu-item bg-gray-200 bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Bake Samosa</h3>
                <p className="text-sm text-gray-800 mb-4">Healthy version of traditional samosa baked to perfection.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Khachori */}
              <div className="menu-item bg-gray-200 bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Khachori</h3>
                <p className="text-sm text-gray-800 mb-4">Deep-fried pastry filled with a spicy mixture of moong dal or urad dal.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Paneer Pakoda */}
              <div className="menu-item bg-gray-200 bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Paneer Pakoda</h3>
                <p className="text-sm text-gray-800 mb-4">Indian cottage cheese fritters marinated in spices and deep-fried.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Bread Pakoda */}
              <div className="menu-item bg-gray-200 bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Bread Pakoda</h3>
                <p className="text-sm text-gray-800 mb-4">Slices of bread stuffed with spiced mashed potatoes and deep-fried.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Chole Bhature */}
              <div className="menu-item bg-gray-200 bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Chole Bhature</h3>
                <p className="text-sm text-gray-800 mb-4">A popular North Indian dish consisting of spicy chickpea curry served with fried bread.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Pav Bhaji */}
              <div className="menu-item bg-gray-200 bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Pav Bhaji</h3>
                <p className="text-sm text-gray-800 mb-4">A flavorful blend of mashed vegetables served with buttered pav (bread).</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Poha */}
              <div className="menu-item bg-gray-200 bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Poha</h3>
                <p className="text-sm text-gray-800 mb-4">A popular Maharashtrian breakfast dish made with flattened rice, vegetables, and spices.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SnacksMenu;
