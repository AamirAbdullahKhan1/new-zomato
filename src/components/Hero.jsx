import React from 'react';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <div className="relative bg-purple-100 py-20 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-800 mb-6">
          Delicious Food, Delivered To You
        </h2>
        <p className="text-xl text-center text-purple-600 mb-8 max-w-2xl">
          Discover the best foods from over 1,000 restaurants and fast delivery to your doorstep
        </p>
        <SearchBar />
        <div className="relative w-full max-w-4xl mx-auto mt-12">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
            alt="Delicious food spread"
            className="rounded-lg shadow-xl w-full h-auto"
          />
          <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;