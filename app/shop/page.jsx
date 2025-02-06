import React from "react";

const products = [
  { id: 1, name: "Apple", image: "/apple.png", price: "$1.99" },
  { id: 2, name: "Banana", image: "/banana.png", price: "$0.99" },
  { id: 3, name: "Carrot", image: "/carrot.png", price: "$0.79" },
  { id: 4, name: "Tomato", image: "/tomato.png", price: "$1.49" },
  { id: 5, name: "Lettuce", image: "/lettuce.png", price: "$2.99" },
  { id: 6, name: "Milk", image: "/milk.png", price: "$3.49" },
  { id: 7, name: "Bread", image: "/bread.png", price: "$2.29" },
  { id: 8, name: "Eggs", image: "/eggs.png", price: "$2.99" },
  { id: 9, name: "Orange", image: "/orange.png", price: "$1.29" },
  { id: 10, name: "Pineapple", image: "/pineapple.png", price: "$3.99" },
  { id: 11, name: "Grapes", image: "/grapes.png", price: "$2.49" },
  { id: 12, name: "Strawberry", image: "/strawberry.png", price: "$2.79" },
];


export default function Grocery() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#123524] to-[#85A947]">
      <div className="container py-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl text-center font-bold text-white drop-shadow-lg">
            🛒 Fresh Grocery Store
          </h1>
          <p className="mt-2 text-center text-emerald-100">Quality products at great prices</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="relative h-48">
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt={item.name}
                  loading={item.id <= 4 ? "eager" : "lazy"}
                />
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                <p className="text-lg font-bold text-emerald-600 mt-1">{item.price}</p>
                <button className="w-full mt-4 px-4 py-2 bg-emerald-500 text-white rounded-lg font-medium transition-colors hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}