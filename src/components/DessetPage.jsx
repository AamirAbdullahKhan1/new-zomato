import React, { useState } from 'react';
import { Star, ShoppingCart } from 'lucide-react';

const desserts = [
  { id: 1, name: "Chocolate Lava Cake", price: 6.99, rating: 4.8, type: "Cake", description: "Warm chocolate cake with a gooey center", image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  { id: 2, name: "New York Cheesecake", price: 5.99, rating: 4.6, type: "Cake", description: "Creamy cheesecake with a graham cracker crust", image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  { id: 3, name: "Tiramisu", price: 7.49, rating: 4.7, type: "Cake", description: "Italian coffee-flavored dessert", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  { id: 4, name: "Strawberry Gelato", price: 4.99, rating: 4.5, type: "Ice Cream", description: "Creamy Italian-style strawberry ice cream", image: "https://images.unsplash.com/photo-1557142046-c704a3adf364?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  { id: 5, name: "Apple Pie", price: 5.49, rating: 4.4, type: "Pie", description: "Classic apple pie with a flaky crust", image: "https://images.unsplash.com/photo-1601000938259-9e92002320b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6, name: "Crème Brûlée", price: 6.99, rating: 4.7, type: "Custard", description: "Rich custard topped with caramelized sugar", image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
];

const DessertCard = ({ dessert, addToCart }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={dessert.image} alt={dessert.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-lg mb-2">{dessert.name}</h3>
      <p className="text-gray-600 mb-2">{dessert.description}</p>
      <div className="flex items-center mb-2">
        <Star className="text-yellow-400 mr-1" size={16} />
        <span>{dessert.rating}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-bold text-lg">${dessert.price.toFixed(2)}</span>
        <button
          onClick={() => addToCart(dessert)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </button>
      </div>
    </div>
  </div>
);

const FilterSidebar = ({ filters, setFilters }) => (
  <div className="bg-white rounded-lg shadow-md p-4">
    <h2 className="font-bold text-lg mb-4">Filters</h2>
    <div className="mb-4">
      <h3 className="font-semibold mb-2">Dessert Type</h3>
      {['Cake', 'Ice Cream', 'Pie', 'Custard'].map((type) => (
        <label key={type} className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={filters.types.includes(type)}
            onChange={() => setFilters(prev => ({
              ...prev,
              types: prev.types.includes(type)
                ? prev.types.filter(t => t !== type)
                : [...prev.types, type]
            }))}
            className="mr-2"
          />
          {type}
        </label>
      ))}
    </div>
    <div className="mb-4">
      <h3 className="font-semibold mb-2">Price Range</h3>
      <input
        type="range"
        min="0"
        max="10"
        step="0.5"
        value={filters.maxPrice}
        onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: Number(e.target.value) }))}
        className="w-full"
      />
      <div className="flex justify-between">
        <span>$0</span>
        <span>${filters.maxPrice.toFixed(2)}</span>
      </div>
    </div>
    <div>
      <h3 className="font-semibold mb-2">Minimum Rating</h3>
      <select
        value={filters.minRating}
        onChange={(e) => setFilters(prev => ({ ...prev, minRating: Number(e.target.value) }))}
        className="w-full p-2 border rounded"
      >
        <option value="0">Any</option>
        <option value="3">3+ Stars</option>
        <option value="4">4+ Stars</option>
        <option value="4.5">4.5+ Stars</option>
      </select>
    </div>
  </div>
);

const DessertsPage = () => {
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({
    types: [],
    maxPrice: 10,
    minRating: 0,
  });

  const addToCart = (dessert) => {
    setCart([...cart, dessert]);
  };

  const filteredDesserts = desserts.filter((dessert) => {
    return (
      (filters.types.length === 0 || filters.types.includes(dessert.type)) &&
      dessert.price <= filters.maxPrice &&
      dessert.rating >= filters.minRating
    );
  });

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Desserts Menu</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDesserts.map((dessert) => (
            <DessertCard key={dessert.id} dessert={dessert} addToCart={addToCart} />
          ))}
        </div>
        <div className="md:w-1/4">
          <FilterSidebar filters={filters} setFilters={setFilters} />
        </div>
      </div>
      {cart.length > 0 && (
        <div className="mt-8 bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-4 pt-4 border-t">
            <span className="font-bold">Total:</span>
            <span className="font-bold">${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DessertsPage;