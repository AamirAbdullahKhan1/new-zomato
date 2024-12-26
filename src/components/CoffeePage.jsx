import React, { useState } from 'react';
import { Star, ShoppingCart } from 'lucide-react';

const coffees = [
  { id: 1, name: "Espresso", price: 2.99, rating: 4.8, type: "Hot", description: "Strong and concentrated shot of coffee", image: "https://plus.unsplash.com/premium_photo-1669687924558-386bff1a0469?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, name: "Cappuccino", price: 3.99, rating: 4.6, type: "Hot", description: "Espresso with steamed milk foam", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  { id: 3, name: "Latte", price: 3.99, rating: 4.5, type: "Hot", description: "Espresso with steamed milk", image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  { id: 4, name: "Iced Coffee", price: 3.49, rating: 4.3, type: "Cold", description: "Chilled coffee served over ice", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  { id: 5, name: "Cold Brew", price: 4.49, rating: 4.7, type: "Cold", description: "Smooth, less acidic cold coffee", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  { id: 6, name: "Mocha", price: 4.29, rating: 4.4, type: "Hot", description: "Espresso with chocolate and steamed milk", image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
];

const CoffeeCard = ({ coffee, addToCart }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={coffee.image} alt={coffee.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-lg mb-2">{coffee.name}</h3>
      <p className="text-gray-600 mb-2">{coffee.description}</p>
      <div className="flex items-center mb-2">
        <Star className="text-yellow-400 mr-1" size={16} />
        <span>{coffee.rating}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-bold text-lg">${coffee.price.toFixed(2)}</span>
        <button
          onClick={() => addToCart(coffee)}
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
      <h3 className="font-semibold mb-2">Coffee Type</h3>
      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          checked={filters.types.includes('Hot')}
          onChange={() => setFilters(prev => ({
            ...prev,
            types: prev.types.includes('Hot')
              ? prev.types.filter(t => t !== 'Hot')
              : [...prev.types, 'Hot']
          }))}
          className="mr-2"
        />
        Hot
      </label>
      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          checked={filters.types.includes('Cold')}
          onChange={() => setFilters(prev => ({
            ...prev,
            types: prev.types.includes('Cold')
              ? prev.types.filter(t => t !== 'Cold')
              : [...prev.types, 'Cold']
          }))}
          className="mr-2"
        />
        Cold
      </label>
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

const CoffeePage = () => {
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({
    types: [],
    maxPrice: 10,
    minRating: 0,
  });

  const addToCart = (coffee) => {
    setCart([...cart, coffee]);
  };

  const filteredCoffees = coffees.filter((coffee) => {
    return (
      (filters.types.length === 0 || filters.types.includes(coffee.type)) &&
      coffee.price <= filters.maxPrice &&
      coffee.rating >= filters.minRating
    );
  });

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Coffee Menu</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCoffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} addToCart={addToCart} />
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

export default CoffeePage;