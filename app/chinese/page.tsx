import React from 'react';

function ChineseMenu() {
  return (
    <div className="bg-cover bg-center bg-fixed" style={{backgroundImage: "url('Templates/images/bgg.jpg')"}}>
      <img src="Templates/images/LOGOBB.png" alt="Logo" className="absolute top-0 left-0 h-48 z-50" />
      <div className="container mx-auto">
        <div className="content">
          <div className="container menu-container">
            <h2 className="text-center text-white text-4xl font-bold mb-10">Chinese Menu</h2>
            
            {/* Chinese items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Chinese item 1 */}
              <div className="menu-item bg-white bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Manchurian Dry</h3>
                <p className="text-sm text-gray-800 mb-4">A crispy Chinese dish made with cauliflower or other vegetables tossed in a flavorful sauce.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Chinese item 2 */}
              <div className="menu-item bg-white bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Manchurian Gravy</h3>
                <p className="text-sm text-gray-800 mb-4">A succulent Chinese dish made with cauliflower or other vegetables in a rich and savory gravy.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Chinese item 3 */}
              <div className="menu-item bg-white bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Fried Rice</h3>
                <p className="text-sm text-gray-800 mb-4">A classic Chinese dish made with stir-fried rice, mixed vegetables, and seasoned with soy sauce and spices.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Chinese item 4 */}
              <div className="menu-item bg-white bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Noodles</h3>
                <p className="text-sm text-gray-800 mb-4">Chinese noodles stir-fried with vegetables, meat, or seafood, seasoned with sauces and spices.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Add more Chinese items as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChineseMenu;
