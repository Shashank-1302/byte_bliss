import React from 'react';

function ChipsAndChocolatesMenu() {
  return (
    <div className="bg-cover bg-center bg-fixed" style={{backgroundImage: "url('Templates/images/bgg.jpg')"}}>
      <img src="Templates/images/LOGOBB.png" alt="Logo" className="absolute top-0 left-0 h-48 z-50" />
      <div className="container mx-auto">
        <div className="content">
          <div className="container menu-container">
            <h2 className="text-center text-white text-4xl font-bold mb-10">Chips and Chocolates Menu</h2>
            
            {/* Chips items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Chips item 1 */}
              <div className="menu-item bg-white bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Onion Chips</h3>
                <p className="text-sm text-gray-800 mb-4">Crunchy chips flavored with savory onion seasoning.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Chips item 2 */}
              <div className="menu-item bg-white bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Tomato Chips</h3>
                <p className="text-sm text-gray-800 mb-4">Delicious chips made from real tomatoes, bursting with tangy flavor.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Chips item 3 */}
              <div className="menu-item bg-white bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Peri Peri Chips</h3>
                <p className="text-sm text-gray-800 mb-4">Spicy and fiery chips seasoned with peri peri spices.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Chips item 4 */}
              <div className="menu-item bg-white bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Salted Chips</h3>
                <p className="text-sm text-gray-800 mb-4">Classic chips seasoned with a sprinkle of salt, perfect for snacking.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Chips item 5 */}
              <div className="menu-item bg-white bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Regular Chips</h3>
                <p className="text-sm text-gray-800 mb-4">The all-time favorite, simple and crispy potato chips.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Chocolate items */}
              {/* Chocolate item 1 */}
              <div className="menu-item bg-white bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Dairy Milk Silk Hazelnut</h3>
                <p className="text-sm text-gray-800 mb-4">Creamy milk chocolate with crunchy hazelnut pieces, a delightful combination.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Chocolate item 2 */}
              <div className="menu-item bg-white bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Ferror Rocher</h3>
                <p className="text-sm text-gray-800 mb-4">Premium chocolate with delicious taste.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Chocolate item 3 */}
              <div className="menu-item bg-white bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Silk Fruits and Nuts</h3>
                <p className="text-sm text-gray-800 mb-4">Rich and creamy milk chocolate with dried fruits and nuts.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Chocolate item 4 */}
              <div className="menu-item bg-white bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Silk Crackers</h3>
                <p className="text-sm text-gray-800 mb-4">Smooth and velvety milk chocolate with crunchy biscuit pieces.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChipsAndChocolatesMenu;
