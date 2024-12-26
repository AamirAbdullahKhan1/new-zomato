import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, ShoppingBag, LogOut } from 'lucide-react';
import { auth } from '../components/firebase'; // Adjust the import path as needed

const UserProfileDropdown = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      // You might want to redirect the user or update the app state here
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <img
          src={user.photoURL || 'https://via.placeholder.com/40'}
          alt="User profile"
          className="w-10 h-10 rounded-full"
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
          <Link
            to="/profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100"
            onClick={() => setIsOpen(false)}
          >
            <User className="inline-block mr-2" size={16} />
            Profile
          </Link>
          <Link
            to="/order-history"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100"
            onClick={() => setIsOpen(false)}
          >
            <ShoppingBag className="inline-block mr-2" size={16} />
            Order History
          </Link>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-100"
          >
            <LogOut className="inline-block mr-2" size={16} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfileDropdown;