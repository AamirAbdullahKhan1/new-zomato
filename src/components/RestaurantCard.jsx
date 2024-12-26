import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => (
  <Link to={`/restaurantpage/${restaurant.id}`} className="block">
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
      <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{restaurant.name}</h3>
        <p className="text-gray-600 mb-2">{restaurant.cuisine}</p>
        <div className="flex items-center">
          <Star className="text-yellow-400 mr-1" size={16} />
          <span>{restaurant.rating}</span>
        </div>
        <p className="text-gray-600 mt-2">{restaurant.priceRange}</p>
      </div>
    </div>
  </Link>
);

export default RestaurantCard;