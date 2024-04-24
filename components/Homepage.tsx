import React from 'react'

function Homepage() {
  return (
    <div className="bg-cover bg-center bg-fixed" style={{backgroundImage: 'Images/spaghetti-1932466_1280 (1).jpg'}}>
    <img src='Images/LOGOBB.png' alt="Logo" className="absolute top-0 left-0 h-32 z-50" />
    <div className="relative z-10 min-h-screen flex justify-center items-center">
      <div className="container mx-auto py-20">
        <h2 className="text-center text-4xl text-white font-bold mb-10">MENU</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Indian Snacks */}
          <div className="menu-category">
            <div className="category-container bg-white bg-opacity-80 p-8 rounded-lg">
              <h3 className="category-heading text-2xl text-black mb-4">Indian Snacks</h3>
              <a href="/indiansnack" className="text-blue-600 hover:underline">View Snacks</a>
            </div>
          </div>

          {/* Main Course */}
          <div className="menu-category">
            <div className="category-container bg-white bg-opacity-80 p-8 rounded-lg">
              <h3 className="category-heading text-2xl text-black mb-4">Main Course</h3>
              <a href="/maincourse" className="text-blue-600 hover:underline">View Main Course</a>
            </div>
          </div>

          {/* Desserts */}
          <div className="menu-category">
            <div className="category-container bg-white bg-opacity-80 p-8 rounded-lg">
              <h3 className="category-heading text-2xl text-black mb-4">Desserts</h3>
              <a href="/dessert" className="text-blue-600 hover:underline">View Desserts</a>
            </div>
          </div>

          {/* Chinese */}
          <div className="menu-category">
              <div className="category-container bg-white bg-opacity-80 p-8 rounded-lg">
                <h3 className="category-heading text-2xl text-black mb-4">Chinese</h3>
                <a href="/chinese" className="text-blue-600 hover:underline">View Chinese</a>
              </div>
            </div>

            {/* Sandwiches and Burger */}
            <div className="menu-category">
              <div className="category-container bg-white bg-opacity-80 p-8 rounded-lg">
                <h3 className="category-heading text-2xl text-black mb-4">Sandwiches and Burger</h3>
                <a href="/sandwiches" className="text-blue-600 hover:underline">View Sandwiches and Burger</a>
              </div>
            </div>

            {/* Appetizers */}
            <div className="menu-category">
              <div className="category-container bg-white bg-opacity-80 p-8 rounded-lg">
                <h3 className="category-heading text-2xl text-black mb-4">Appetizers</h3>
                <a href="/appetizer" className="text-blue-600 hover:underline">View Appetizers</a>
              </div>
            </div>

            {/* Chips and Chocolates */}
            <div className="menu-category">
              <div className="category-container bg-white bg-opacity-80 p-8 rounded-lg">
                <h3 className="category-heading text-2xl text-black mb-4">Chips and Chocolates</h3>
                <a href="/chipchocolate" className="text-blue-600 hover:underline">View Chips and Chocolates</a>
              </div>
            </div>

            {/* Ice Cream */}
            <div className="menu-category">
              <div className="category-container bg-white bg-opacity-80 p-8 rounded-lg">
                <h3 className="category-heading text-2xl text-black mb-4">Ice Cream</h3>
                <a href="/icecream" className="text-blue-600 hover:underline">View Ice Cream</a>
              </div>
            </div>

            {/* Cold Drinks and Beverages */}
            <div className="menu-category">
              <div className="category-container bg-white bg-opacity-80 p-8 rounded-lg">
                <h3 className="category-heading text-2xl text-black mb-4">Cold Drinks and Beverages</h3>
                <a href="/beverages" className="text-blue-600 hover:underline">View Cold Drinks and Beverages</a>
              </div>
            </div>
          {/* Add more categories as needed */}
        </div>
      </div>
    </div>
  </div>

  )
}

export default Homepage