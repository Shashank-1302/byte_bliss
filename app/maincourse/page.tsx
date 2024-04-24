import React from 'react';

function MainCourseMenu() {
  return (
    <div className="bg-cover bg-center bg-fixed" style={{backgroundImage: "url('Templates/images/bgg.jpg')"}}>
      <img src="Templates/images/LOGOBB.png" alt="Logo" className="absolute top-0 left-0 h-48 z-50" />
      <div className="container mx-auto">
        <div className="content">
          <div className="container menu-container">
            <h2 className="text-center text-white text-4xl font-bold mb-10">Main Course</h2>
            
            {/* Paratha items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Aloo Parathas */}
              <div className="menu-item bg-gray-200 bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Aloo Parathas</h3>
                <p className="text-sm text-gray-800 mb-4">Delicious parathas stuffed with spiced mashed potatoes.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Paneer Parathas */}
              <div className="menu-item bg-gray-200 bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Paneer Parathas</h3>
                <p className="text-sm text-gray-800 mb-4">Parathas filled with flavorful paneer filling.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Special Veg Parathas */}
              <div className="menu-item bg-gray-200 bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Special Veg Parathas</h3>
                <p className="text-sm text-gray-800 mb-4">Special parathas stuffed with a variety of mixed vegetables.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Plain Parathas */}
              <div className="menu-item bg-gray-200 bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Plain Parathas</h3>
                <p className="text-sm text-gray-800 mb-4">Simple and delicious plain parathas.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Special Thali */}
              <div className="menu-item bg-gray-200 bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Special Thali</h3>
                <p className="text-sm text-gray-800 mb-4">A grand platter with a variety of dishes, perfect for a hearty meal.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>

              {/* Regular Thali */}
              <div className="menu-item bg-gray-200 bg-opacity-75 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Regular Thali</h3>
                <p className="text-sm text-gray-800 mb-4">A standard meal platter with balanced portions of main dishes and sides.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCourseMenu;
