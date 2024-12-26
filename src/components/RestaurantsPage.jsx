import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FilterSidebar from './FilterSidebar';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const mockRestaurants = [
  { id: 1, name: "Spice Paradise", cuisine: "Indian", rating: 4.5, priceRange: "$$", image: "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, name: "Sushi Haven", cuisine: "Japanese", rating: 4.7, priceRange: "$$$", image: "https://images.unsplash.com/photo-1497644083578-611b798c60f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, name: "Pasta Palace", cuisine: "Italian", rating: 4.2, priceRange: "$$", image: "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, name: "Burger Bliss", cuisine: "American", rating: 4.0, priceRange: "$", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 5, name: "Wok & Roll", cuisine: "Chinese", rating: 4.6, priceRange: "$$", image: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6, name: "Taco Fiesta", cuisine: "Mexican", rating: 4.3, priceRange: "$", image: "https://images.unsplash.com/photo-1622140739492-f82f386260b5?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 7, name: "Sizzling Steakhouse", cuisine: "American", rating: 4.8, priceRange: "$$$", image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 8, name: "Pho Delight", cuisine: "Vietnamese", rating: 4.4, priceRange: "$$", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 9, name: "Mediterranean Oasis", cuisine: "Mediterranean", rating: 4.6, priceRange: "$$", image: "https://images.unsplash.com/photo-1540914124281-342587941389?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 10, name: "Curry House", cuisine: "Indian", rating: 4.3, priceRange: "$$", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 11, name: "Sushi Sensation", cuisine: "Japanese", rating: 4.9, priceRange: "$$$", image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 12, name: "Pizzeria Perfection", cuisine: "Italian", rating: 4.5, priceRange: "$$", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 13, name: "Taco Town", cuisine: "Mexican", rating: 4.2, priceRange: "$", image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 14, name: "Dim Sum Delights", cuisine: "Chinese", rating: 4.7, priceRange: "$$", image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 15, name: "Burger Barn", cuisine: "American", rating: 4.1, priceRange: "$", image: "https://images.unsplash.com/photo-1586816001966-79b736744398?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

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

const RestaurantsPage = () => {
  const [restaurants, setRestaurants] = useState(mockRestaurants);
  const [filters, setFilters] = useState({
    price: [],
    rating: null,
    cuisine: []
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const applyFilters = () => {
    let filteredRestaurants = mockRestaurants;

    if (filters.price.length > 0) {
      filteredRestaurants = filteredRestaurants.filter(restaurant => 
        filters.price.includes(restaurant.priceRange)
      );
    }

    if (filters.rating) {
      filteredRestaurants = filteredRestaurants.filter(restaurant => 
        restaurant.rating >= filters.rating
      );
    }

    if (filters.cuisine.length > 0) {
      filteredRestaurants = filteredRestaurants.filter(restaurant => 
        filters.cuisine.includes(restaurant.cuisine)
      );
    }

    setRestaurants(filteredRestaurants);
    setCurrentPage(1); // Reset to first page when filters change
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = restaurants.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(restaurants.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex container mx-auto px-4 py-8 bg-purple-100">
      <FilterSidebar filters={filters} setFilters={setFilters} />
      <div className="flex-1 ml-8">
        <h1 className="text-3xl font-bold mb-6">Restaurants</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map(restaurant => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
        
        {/* Pagination controls */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="mx-1 px-3 py-2 bg-gray-200 text-gray-800 rounded-md disabled:opacity-50"
          >
            <ChevronLeft size={20} />
          </button>
          {[...Array(totalPages).keys()].map(number => (
            <button
              key={number + 1}
              onClick={() => paginate(number + 1)}
              className={`mx-1 px-3 py-2 rounded-md ${
                currentPage === number + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              {number + 1}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="mx-1 px-3 py-2 bg-gray-200 text-gray-800 rounded-md disabled:opacity-50"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsPage;