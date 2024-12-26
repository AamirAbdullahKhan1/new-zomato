import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';

const mockRestaurants = [
  { id: 1, name: "Spice Paradise", cuisine: "Indian", rating: 4.5, priceRange: "$$", image: "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", menu: [
    { name: "Butter Chicken", price: 14.99, description: "Tender chicken in a rich, creamy tomato sauce" },
    { name: "Vegetable Biryani", price: 12.99, description: "Fragrant basmati rice with mixed vegetables" },
    { name: "Garlic Naan", price: 3.99, description: "Soft flatbread with garlic and herbs" },
  ]},
  { id: 2, name: "Sushi Haven", cuisine: "Japanese", rating: 4.7, priceRange: "$$$", image: "https://images.unsplash.com/photo-1497644083578-611b798c60f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", menu: [
    { name: "California Roll", price: 8.99, description: "Crab, avocado, and cucumber roll" },
    { name: "Salmon Nigiri", price: 12.99, description: "Fresh salmon over pressed rice" },
    { name: "Miso Soup", price: 4.99, description: "Traditional Japanese soybean soup" },
  ]},
  { id: 3, name: "Pasta Palace", cuisine: "Italian", rating: 4.2, priceRange: "$$", image: "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", menu: [
    { name: "Spaghetti Carbonara", price: 13.99, description: "Classic pasta dish with pancetta, eggs, and cheese" },
    { name: "Margherita Pizza", price: 11.99, description: "Simple pizza with tomato sauce, mozzarella, and basil" },
    { name: "Tiramisu", price: 6.99, description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream" },
  ]},
  { id: 4, name: "Burger Bliss", cuisine: "American", rating: 4.0, priceRange: "$", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", menu: [
    { name: "Classic Cheeseburger", price: 9.99, description: "Juicy beef patty with cheese, lettuce, and tomato" },
    { name: "Crispy Fries", price: 3.99, description: "Golden-brown, crispy fries" },
    { name: "Chocolate Milkshake", price: 4.99, description: "Thick and creamy chocolate milkshake" },
  ]},
  { id: 5, name: "Wok & Roll", cuisine: "Chinese", rating: 4.6, priceRange: "$$", image: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", menu: [
    { name: "Kung Pao Chicken", price: 12.99, description: "Spicy chicken with peanuts and vegetables" },
    { name: "Vegetable Spring Rolls", price: 5.99, description: "Fresh spring rolls with vegetables and rice noodles" },
    { name: "Egg Fried Rice", price: 7.99, description: "Fluffy fried rice with eggs and vegetables" },
  ]},
  { id: 6, name: "Taco Fiesta", cuisine: "Mexican", rating: 4.3, priceRange: "$", image: "https://images.unsplash.com/photo-1622140739492-f82f386260b5?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", menu: [
    { name: "Beef Tacos (3)", price: 8.99, description: "Three delicious beef tacos with all the fixings" },
    { name: "Chicken Quesadilla", price: 10.99, description: "Grilled tortilla filled with chicken and cheese" },
    { name: "Guacamole & Chips", price: 5.99, description: "Fresh guacamole served with tortilla chips" },
  ]},
  { id: 7, name: "Sizzling Steakhouse", cuisine: "American", rating: 4.8, priceRange: "$$$", image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", menu: [
    { name: "Ribeye Steak", price: 29.99, description: "Prime cut ribeye steak grilled to perfection" },
    { name: "Lobster Tail", price: 34.99, description: "Succulent lobster tail with drawn butter" },
    { name: "Truffle Mashed Potatoes", price: 8.99, description: "Creamy mashed potatoes with truffle oil" },
  ]},
  { id: 8, name: "Pho Delight", cuisine: "Vietnamese", rating: 4.4, priceRange: "$$", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", menu: [
    { name: "Beef Pho", price: 11.99, description: "Traditional Vietnamese noodle soup with beef" },
    { name: "Spring Rolls", price: 6.99, description: "Fresh spring rolls with shrimp and peanut sauce" },
    { name: "Banh Mi", price: 8.99, description: "Vietnamese sandwich with grilled pork and pickled vegetables" },
  ]},
  { id: 9, name: "Mediterranean Oasis", cuisine: "Mediterranean", rating: 4.6, priceRange: "$$", image: "https://images.unsplash.com/photo-1540914124281-342587941389?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", menu: [
    { name: "Mezze Platter", price: 15.99, description: "Assortment of Mediterranean appetizers" },
    { name: "Lamb Kebab", price: 18.99, description: "Grilled lamb kebab with rice and vegetables" },
    { name: "Baklava", price: 5.99, description: "Sweet pastry made of layers of filo with chopped nuts" },
  ]},
  { id: 10, name: "Curry House", cuisine: "Indian", rating: 4.3, priceRange: "$$", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", menu: [
    { name: "Chicken Tikka Masala", price: 14.99, description: "Grilled chicken in a creamy tomato sauce" },
    { name: "Palak Paneer", price: 12.99, description: "Spinach curry with Indian cheese" },
    { name: "Mango Lassi", price: 3.99, description: "Refreshing yogurt drink with mango" },
  ]},
  { id: 11, name: "Sushi Sensation", cuisine: "Japanese", rating: 4.9, priceRange: "$$$", image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", menu: [
    { name: "Omakase Set", price: 89.99, description: "Chef's selection of premium sushi" },
    { name: "Toro Sashimi", price: 24.99, description: "Fatty tuna sashimi" },
    { name: "Uni Gunkan", price: 18.99, description: "Sea urchin wrapped in seaweed" },
  ]},
  { id: 12, name: "Pizzeria Perfection", cuisine: "Italian", rating: 4.5, priceRange: "$$", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", menu: [
    { name: "Neapolitan Pizza", price: 15.99, description: "Classic Neapolitan-style margherita pizza" },
    { name: "Truffle Pasta", price: 18.99, description: "Fettuccine with black truffle cream sauce" },
    { name: "Caprese Salad", price: 9.99, description: "Fresh mozzarella, tomatoes, and basil" },
  ]},
  { id: 13, name: "Taco Town", cuisine: "Mexican", rating: 4.2, priceRange: "$", image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", menu: [
    { name: "Street Tacos (4)", price: 8.99, description: "Authentic street-style tacos with various fillings" },
    { name: "Burrito Grande", price: 10.99, description: "Large burrito with your choice of meat and toppings" },
    { name: "Churros", price: 4.99, description: "Mexican-style fried dough with cinnamon sugar" },
  ]},
  { id: 14, name: "Dim Sum Delights", cuisine: "Chinese", rating: 4.7, priceRange: "$$", image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", menu: [
    { name: "Har Gow", price: 6.99, description: "Shrimp dumplings in translucent wrappers" },
    { name: "Siu Mai", price: 5.99, description: "Open-topped dumplings with pork and shrimp" },
    { name: "Egg Tarts", price: 4.99, description: "Sweet egg custard in a flaky pastry shell" },
  ]},
  { id: 15, name: "Burger Barn", cuisine: "American", rating: 4.1, priceRange: "$", image: "https://images.unsplash.com/photo-1586816001966-79b736744398?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", menu: [
    { name: "Farm Burger", price: 10.99, description: "Grass-fed beef burger with local cheddar and bacon" },
    { name: "Veggie Burger", price: 9.99, description: "House-made vegetable and grain patty" },
    { name: "Sweet Potato Fries", price: 4.99, description: "Crispy sweet potato fries with chipotle aioli" },
  ]},
];

const RestaurantDetailPage = () => {
  const { id } = useParams();
  const restaurant = mockRestaurants.find(r => r.id === parseInt(id));
  const [cart, setCart] = useState([]);

  if (!restaurant) {
    return <div className="container mx-auto px-4 py-8">Restaurant not found</div>;
  }

  const addToCart = (item) => {
    setCart([...cart, item]);
    // You might want to add a toast notification here
    console.log(`Added ${item.name} to cart`);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-purple-100">
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="relative">
          <img src={restaurant.image} alt={restaurant.name} className="w-full h-64 object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
            <p className="text-lg">{restaurant.cuisine} Cuisine</p>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center mb-4">
            <Star className="text-yellow-400 mr-1" size={20} />
            <span className="font-semibold mr-2">{restaurant.rating}</span>
            <span className="bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded">{restaurant.priceRange}</span>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurant.menu.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg">${item.price.toFixed(2)}</span>
              <button 
                onClick={() => addToCart(item)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
              >
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Your Cart</h3>
          <div className="bg-white rounded-lg shadow-md p-4">
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
        </div>
      )}
    </div>
  );
};

export default RestaurantDetailPage;