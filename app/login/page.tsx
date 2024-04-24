'use client'
import React, { useState } from 'react';
import router, { useRouter } from 'next/router';

function Login() {
  const [formData, setFormData] = useState({
    username: 'user',
    password: 'password',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      // Make API request to your server to authenticate user
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Redirect to homepage upon successful login
        router.push('/');
      } else {
        // Handle authentication error
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-cover bg-center bg-fixed" style={{backgroundImage: "url('Templates/images/login.jpg')"}}>
      <img src="Templates/images/LOGOBB.png" alt="Logo" className="absolute top-0 left-0 h-48 z-50" />
      <div className="container mx-auto flex justify-center items-center h-screen">
        <div className="max-w-md w-full">
          <div className="bg-white bg-opacity-75 rounded-lg shadow-md p-8">
            <h3 className="text-center text-2xl mb-6">Welcome To Bite Bliss</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter username" required />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter password" required />
              </div>
              <div className="mb-4 flex items-center">
                <input type="checkbox" id="rememberMe" className="mr-2 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                <label htmlFor="rememberMe" className="block text-sm font-medium text-gray-700">Remember Me</label>
              </div>
              <button type="submit" className="w-full bg-indigo-500 text-white font-semibold p-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">Login</button>
            </form>
            <div className="text-center mt-3">
              <a href="#" className="text-indigo-500 hover:underline">Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
