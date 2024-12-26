import React, { useState } from 'react';
import { Star, ShoppingCart } from 'lucide-react';

const pizzas = [
  { id: 1, name: "Margherita", price: 12.99, rating: 4.5, isVeg: true, toppings: ["tomato", "mozzarella", "basil"], image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  { id: 2, name: "Pepperoni", price: 14.99, rating: 4.3, isVeg: false, toppings: ["tomato", "mozzarella", "pepperoni"], image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  { id: 3, name: "Vegetarian", price: 13.99, rating: 4.1, isVeg: true, toppings: ["tomato", "mozzarella", "bell peppers", "onions", "mushrooms"], image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  { id: 4, name: "Hawaiian", price: 15.99, rating: 4.0, isVeg: false, toppings: ["tomato", "mozzarella", "ham", "pineapple"], image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  { id: 5, name: "BBQ Chicken", price: 16.99, rating: 4.4, isVeg: false, toppings: ["bbq sauce", "mozzarella", "chicken", "red onions"], image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  { id: 6, name: "Mushroom Truffle", price: 18.99, rating: 4.7, isVeg: true, toppings: ["truffle sauce", "mozzarella", "mushrooms", "arugula"], image: "https://images.unsplash.com/photo-1620374645310-f9d97e733268?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
];

const PizzaCard = ({ pizza, addToCart }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={pizza.image} alt={pizza.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-lg mb-2">{pizza.name}</h3>
      <p className="text-gray-600 mb-2">{pizza.toppings.join(", ")}</p>
      <div className="flex items-center mb-2">
        <Star className="text-yellow-400 mr-1" size={16} />
        <span>{pizza.rating}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-bold text-lg">${pizza.price.toFixed(2)}</span>
        <button
          onClick={() => addToCart(pizza)}
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
      <h3 className="font-semibold mb-2">Dietary</h3>
      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          checked={filters.vegOnly}
          onChange={() => setFilters({ ...filters, vegOnly: !filters.vegOnly })}
          className="mr-2"
        />
        Vegetarian Only
      </label>
    </div>
    <div className="mb-4">
      <h3 className="font-semibold mb-2">Price Range</h3>
      <input
        type="range"
        min="0"
        max="20"
        step="1"
        value={filters.maxPrice}
        onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
        className="w-full"
      />
      <div className="flex justify-between">
        <span>$0</span>
        <span>${filters.maxPrice}</span>
      </div>
    </div>
    <div>
      <h3 className="font-semibold mb-2">Minimum Rating</h3>
      <select
        value={filters.minRating}
        onChange={(e) => setFilters({ ...filters, minRating: Number(e.target.value) })}
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

const PizzaPage = () => {
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({
    vegOnly: false,
    maxPrice: 20,
    minRating: 0,
  });

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
  };

  const filteredPizzas = pizzas.filter((pizza) => {
    return (
      (!filters.vegOnly || pizza.isVeg) &&
      pizza.price <= filters.maxPrice &&
      pizza.rating >= filters.minRating
    );
  });

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Pizza Menu</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPizzas.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} addToCart={addToCart} />
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

export default PizzaPage;