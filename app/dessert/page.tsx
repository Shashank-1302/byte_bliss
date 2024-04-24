import React from 'react';

function IndianDessertsMenu() {
  return (
    <div className="bg-cover bg-center bg-fixed" style={{backgroundImage: "url('Templates/images/bgg.jpg')"}}>
      <img src="Templates/images/LOGOBB.png" alt="Logo" className="absolute top-0 left-0 h-48 z-50" />
      <div className="container mx-auto">
        <div className="content">
          <div className="container menu-container">
            <h2 className="text-center text-white text-4xl font-bold mb-10">Indian Desserts Menu</h2>
            
            {/* Dessert items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Dessert item 1 */}
              <div className="menu-item bg-white bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Rasgulla</h3>
                <p className="text-sm text-gray-800 mb-4">Soft and spongy cottage cheese balls soaked in sugar syrup.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Dessert item 2 */}
              <div className="menu-item bg-white bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Gulab Jamun</h3>
                <p className="text-sm text-gray-800 mb-4">Deep-fried milk solids balls dipped in sugar syrup.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Dessert item 3 */}
              <div className="menu-item bg-white bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Jalebi</h3>
                <p className="text-sm text-gray-800 mb-4">Crispy and syrupy sweet made from deep-fried flour batter.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Dessert item 4 */}
              <div className="menu-item bg-white bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Kheer</h3>
                <p className="text-sm text-gray-800 mb-4">Creamy rice pudding flavored with cardamom and garnished with nuts.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndianDessertsMenu;
