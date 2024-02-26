import React from 'react';

export default function RegisterForm() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-black">Register</h2>

        <form>
          {/* Username */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-black">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-white"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-white"
            />
          </div>

          {/* Tel */}
          <div className="mb-4">
            <label htmlFor="tel" className="block text-sm font-medium text-black">
              Tel
            </label>
            <input
              type="tel"
              id="tel"
              name="tel"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-white"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-white"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
