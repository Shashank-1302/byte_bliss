import React from 'react';

function IceCreamMenu() {
  return (
    <div className="bg-cover bg-center bg-fixed" style={{backgroundImage: "url('Templates/images/bgg.jpg')"}}>
      <img src="Templates/images/LOGOBB.png" alt="Logo" className="absolute top-0 left-0 h-48 z-50" />
      <div className="container mx-auto">
        <div className="content">
          <div className="container menu-container">
            <h2 className="text-center text-white text-4xl font-bold mb-10">Ice Cream Menu</h2>
            
            {/* Ice cream items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ice cream item 1 */}
              <div className="menu-item bg-white bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Chocolate Chip Ice Cream</h3>
                <p className="text-sm text-gray-800 mb-4">Creamy vanilla ice cream loaded with chocolate chips.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Ice cream item 2 */}
              <div className="menu-item bg-white bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Strawberry Swirl Ice Cream</h3>
                <p className="text-sm text-gray-800 mb-4">Delicious strawberry-flavored ice cream swirled with ribbons of sweet strawberry sauce.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Ice cream item 3 */}
              <div className="menu-item bg-white bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Cookies and Cream Ice Cream</h3>
                <p className="text-sm text-gray-800 mb-4">Smooth vanilla ice cream with crunchy chocolate cookie crumbles mixed in.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Ice cream item 4 */}
              <div className="menu-item bg-white bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Mint Chocolate Chip Ice Cream</h3>
                <p className="text-sm text-gray-800 mb-4">Refreshing mint-flavored ice cream with rich chocolate chips throughout.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IceCreamMenu;
