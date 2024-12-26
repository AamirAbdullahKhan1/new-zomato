import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import UserProfileDropdown from './UserProfileDropdown';
import { useAuth } from '../components/AuthContext'; // Adjust the import path as needed

const Header = () => {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-2xl font-bold text-purple-600">
            Zomato
          </Link>
          <nav className="hidden md:flex space-x-4 uppercase font-medium">
            <Link to="/" className="text-gray-600 hover:text-purple-600">
              Home
            </Link>
            <Link to="/restaurantpage" className="text-gray-600 hover:text-purple-600">
              Restaurants
            </Link>
            <Link to="/cuisines" className="text-gray-600 hover:text-purple-600">
              Cuisines
            </Link>
            <Link to="/offers" className="text-gray-600 hover:text-purple-600">
              Offers
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:text-purple-600">
            <Search size={25} />
          </button>
          <button className="p-2 text-gray-600 hover:text-purple-600">
            <ShoppingBag size={25} />
          </button>
          {user ? (
            <UserProfileDropdown user={user} />
          ) : (
            <Link
              to="/signup"
              className="p-2 text-gray-600 hover:bg-black hover:text-white transition-all duration-300 font-medium border-2 border-zinc-800 rounded-full px-4 uppercase"
            >
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;