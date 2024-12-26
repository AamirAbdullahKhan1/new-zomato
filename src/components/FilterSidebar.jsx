import React from 'react';
import { Star } from 'lucide-react';

const FilterSidebar = ({ filters, setFilters }) => {
  const priceOptions = ['$', '$$', '$$$', '$$$$'];
  const cuisineOptions = ['Indian', 'Chinese', 'Italian', 'Japanese', 'Mexican', 'American'];

  const handlePriceChange = (price) => {
    setFilters(prev => ({
      ...prev,
      price: prev.price.includes(price)
        ? prev.price.filter(p => p !== price)
        : [...prev.price, price]
    }));
  };

  const handleRatingChange = (rating) => {
    setFilters(prev => ({
      ...prev,
      rating: prev.rating === rating ? null : rating
    }));
  };

  const handleCuisineChange = (cuisine) => {
    setFilters(prev => ({
      ...prev,
      cuisine: prev.cuisine.includes(cuisine)
        ? prev.cuisine.filter(c => c !== cuisine)
        : [...prev.cuisine, cuisine]
    }));
  };

  return (
    <div className="w-64 pr-8">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      
      <div className="mb-6">
        <h3 className="font-medium mb-2">Price</h3>
        <div className="flex space-x-2">
          {priceOptions.map(price => (
            <button
              key={price}
              className={`px-3 py-1 border rounded ${
                filters.price.includes(price) ? 'bg-purple-600 text-white' : 'bg-white text-gray-700'
              }`}
              onClick={() => handlePriceChange(price)}
            >
              {price}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Rating</h3>
        <div className="flex flex-col space-y-2">
          {[4, 3, 2, 1].map(rating => (
            <button
              key={rating}
              className={`flex items-center px-3 py-1 border rounded ${
                filters.rating === rating ? 'bg-purple-600 text-white' : 'bg-white text-gray-700'
              }`}
              onClick={() => handleRatingChange(rating)}
            >
              {Array(rating).fill().map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
              <span className="ml-2">{rating}+ Stars</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Cuisine</h3>
        <div className="flex flex-col space-y-2">
          {cuisineOptions.map(cuisine => (
            <label key={cuisine} className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-purple-600"
                checked={filters.cuisine.includes(cuisine)}
                onChange={() => handleCuisineChange(cuisine)}
              />
              <span className="ml-2">{cuisine}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;