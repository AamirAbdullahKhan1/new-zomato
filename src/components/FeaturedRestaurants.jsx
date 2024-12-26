import React from 'react';
import { Star } from 'lucide-react';

const RestaurantCard = ({ name, cuisine, rating, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
    <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-lg mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">{cuisine}</p>
      <div className="flex items-center">
        <Star className="text-yellow-400 mr-1" size={16} />
        <span>{rating}</span>
      </div>
    </div>
  </div>
);

const FeaturedRestaurants = () => {
  const restaurants = [
    { 
      name: "Burger Queen", 
      cuisine: "American", 
      rating: 4.5, 
      imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Pasta Paradise", 
      cuisine: "Italian", 
      rating: 4.7, 
      imageUrl: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80" 
    },
    { 
      name: "Sushi Sensation", 
      cuisine: "Japanese", 
      rating: 4.8, 
      imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80" 
    },
    { 
      name: "Spice Route", 
      cuisine: "Indian", 
      rating: 4.6, 
      imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80" 
    },
  ];

  return (
    <section className="py-16 bg-purple-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-800 uppercase">Featured Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard key={index} {...restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;