import React from 'react';

function ColdDrinksAndBeveragesMenu() {
  return (
    <div className="bg-cover bg-center bg-fixed" style={{backgroundImage: "url('Templates/images/bgg.jpg')"}}>
      <img src="Templates/images/LOGOBB.png" alt="Logo" className="absolute top-0 left-0 h-48 z-50" />
      <div className="container mx-auto">
        <div className="content">
          <div className="container menu-container">
            <h2 className="text-center text-white text-4xl font-bold mb-10">Cold Drinks and Beverages Menu</h2>
            
            {/* Beverage items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Beverage item 1 */}
              <div className="menu-item bg-white bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Coca Cola</h3>
                <p>Classic Coca Cola soft drink, refreshing and bubbly.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Beverage item 2 */}
              <div className="menu-item bg-white bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Pepsi</h3>
                <p>Popular Pepsi cola soft drink, perfect for quenching your thirst.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Beverage item 3 */}
              <div className="menu-item bg-white bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Maza</h3>
                <p>Maza, a refreshing mango flavored drink, ideal for hot days.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Repeat the structure for other items */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColdDrinksAndBeveragesMenu;
