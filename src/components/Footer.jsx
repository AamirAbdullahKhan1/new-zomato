import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FoodHub</h3>
            <p className="text-purple-200">Delicious food delivered to your doorstep</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-300">Home</a></li>
              <li><a href="#" className="hover:text-purple-300">Restaurants</a></li>
              <li><a href="#" className="hover:text-purple-300">Cuisines</a></li>
              <li><a href="#" className="hover:text-purple-300">Offers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-purple-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-300">Refund Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect with Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-300"><Facebook size={24} /></a>
              <a href="#" className="hover:text-purple-300"><Twitter size={24} /></a>
              <a href="#" className="hover:text-purple-300"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-800 text-center text-purple-300">
          <p>&copy; 2023 FoodHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;