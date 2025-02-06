"use client";
import Link from 'next/link';
import React, { useState } from 'react';

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="w-full max-w-sm p-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                    className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-300"
                  />
                  <span className="text-sm text-gray-600">{showPassword?"Hide": "Show"}</span>
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <Link href='/'>
          <button
            type="submit"
            className="w-full mt-7 bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
          </Link>
        </form>

        {/* Forgot Password Link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Forgot your password?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Reset it here
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
