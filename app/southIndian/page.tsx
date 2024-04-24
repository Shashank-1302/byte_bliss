import React from 'react';

function SouthIndianMenu() {
  return (
    <div className="bg-cover bg-center bg-fixed" style={{backgroundImage: "url('Templates/images/bgg.jpg')"}}>
      <img src="Templates/images/LOGOBB.png" alt="Logo" className="absolute top-0 left-0 h-48 z-50" />
      <div className="container mx-auto">
        <div className="content">
          <div className="container menu-container">
            <h2 className="text-center text-white text-4xl font-bold mb-10">South Indian Menu</h2>
            
            {/* South Indian items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Plain Dosa */}
              <div className="menu-item bg-gray-200 bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Plain Dosa</h3>
                <p className="text-sm text-gray-800 mb-4">A thin crispy pancake made from fermented rice and lentil batter.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Masala Dosa */}
              <div className="menu-item bg-gray-200 bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Masala Dosa</h3>
                <p className="text-sm text-gray-800 mb-4">A thin crispy pancake filled with spicy potato filling.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Idli Sambhar */}
              <div className="menu-item bg-gray-200 bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Idli Sambhar</h3>
                <p className="text-sm text-gray-800 mb-4">Steamed rice cakes served with lentil soup and coconut chutney.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Vada Sambhar */}
              <div className="menu-item bg-gray-200 bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Vada Sambhar</h3>
                <p className="text-sm text-gray-800 mb-4">Deep-fried lentil donuts served with lentil soup and coconut chutney.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SouthIndianMenu;
