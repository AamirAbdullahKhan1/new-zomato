import React, { useState } from 'react';
import { Star, ShoppingCart } from 'lucide-react';

const healthyOptions = [
  { id: 1, name: "Quinoa Salad Bowl", price: 9.99, rating: 4.6, type: "Salad", dietaryInfo: ["Vegan", "Gluten-Free"], description: "Nutrient-rich quinoa with mixed vegetables and vinaigrette", image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  { id: 2, name: "Grilled Chicken Breast", price: 11.99, rating: 4.7, type: "Main Course", dietaryInfo: ["High-Protein", "Low-Carb"], description: "Lean grilled chicken breast with steamed vegetables", image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  { id: 3, name: "Vegetable Stir-Fry", price: 8.99, rating: 4.4, type: "Main Course", dietaryInfo: ["Vegan", "Low-Calorie"], description: "Assorted vegetables stir-fried in a light soy sauce", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  { id: 4, name: "Greek Yogurt Parfait", price: 6.99, rating: 4.5, type: "Breakfast", dietaryInfo: ["High-Protein", "Probiotic"], description: "Greek yogurt layered with granola and fresh berries", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  { id: 5, name: "Salmon Avocado Toast", price: 10.99, rating: 4.8, type: "Breakfast", dietaryInfo: ["Omega-3", "High-Protein"], description: "Whole grain toast topped with avocado and smoked salmon", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  { id: 6, name: "Lentil Soup", price: 7.99, rating: 4.3, type: "Soup", dietaryInfo: ["Vegan", "High-Fiber"], description: "Hearty lentil soup with vegetables and herbs", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
];

const HealthyOptionCard = ({ item, addToCart }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-lg mb-2">{item.name}</h3>
      <p className="text-gray-600 mb-2">{item.description}</p>
      <div className="flex items-center mb-2">
        <Star className="text-yellow-400 mr-1" size={16} />
        <span>{item.rating}</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-2">
        {item.dietaryInfo.map((info, index) => (
          <span key={index} className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
            {info}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <span className="font-bold text-lg">${item.price.toFixed(2)}</span>
        <button
          onClick={() => addToCart(item)}
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
      <h3 className="font-semibold mb-2">Meal Type</h3>
      {['Breakfast', 'Main Course', 'Salad', 'Soup'].map((type) => (
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
      <h3 className="font-semibold mb-2">Dietary Restrictions</h3>
      {['Vegan', 'Gluten-Free', 'High-Protein', 'Low-Carb'].map((diet) => (
        <label key={diet} className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={filters.dietaryRestrictions.includes(diet)}
            onChange={() => setFilters(prev => ({
              ...prev,
              dietaryRestrictions: prev.dietaryRestrictions.includes(diet)
                ? prev.dietaryRestrictions.filter(d => d !== diet)
                : [...prev.dietaryRestrictions, diet]
            }))}
            className="mr-2"
          />
          {diet}
        </label>
      ))}
    </div>
    <div className="mb-4">
      <h3 className="font-semibold mb-2">Price Range</h3>
      <input
        type="range"
        min="0"
        max="20"
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

const HealthyOptionsPage = () => {
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({
    types: [],
    dietaryRestrictions: [],
    maxPrice: 20,
    minRating: 0,
  });

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const filteredOptions = healthyOptions.filter((item) => {
    return (
      (filters.types.length === 0 || filters.types.includes(item.type)) &&
      (filters.dietaryRestrictions.length === 0 || filters.dietaryRestrictions.every(restriction => item.dietaryInfo.includes(restriction))) &&
      item.price <= filters.maxPrice &&
      item.rating >= filters.minRating
    );
  });

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Healthy Options Menu</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOptions.map((item) => (
            <HealthyOptionCard key={item.id} item={item} addToCart={addToCart} />
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

export default HealthyOptionsPage;