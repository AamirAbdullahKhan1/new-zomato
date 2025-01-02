import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';

const featuredRestaurants = [
  { 
    id: 16,
    name: "Burger Queen", 
    cuisine: "American", 
    rating: 4.5, 
    priceRange: "$$",
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    menu: [
      { name: "Whopper", price: 5.99, description: "Flame-grilled beef patty with fresh toppings" },
      { name: "Chicken Royale", price: 6.99, description: "Crispy chicken fillet with lettuce and mayo" },
      { name: "Veggie Burger", price: 5.49, description: "Plant-based patty with fresh vegetables" },
    ]
  },
  { 
    id: 17,
    name: "Pasta Paradise", 
    cuisine: "Italian", 
    rating: 4.7, 
    priceRange: "$$",
    imageUrl: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
    menu: [
      { name: "Spaghetti Carbonara", price: 12.99, description: "Classic pasta with eggs, cheese, and pancetta" },
      { name: "Fettuccine Alfredo", price: 11.99, description: "Creamy pasta with Parmesan cheese" },
      { name: "Penne Arrabbiata", price: 10.99, description: "Spicy tomato sauce with garlic and red chili peppers" },
    ]
  },
  { 
    id: 18,
    name: "Sushi Sensation", 
    cuisine: "Japanese", 
    rating: 4.8, 
    priceRange: "$$$",
    imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
    menu: [
      { name: "Rainbow Roll", price: 14.99, description: "Colorful sushi roll with assorted fish toppings" },
      { name: "Tempura Udon", price: 12.99, description: "Thick noodle soup with crispy tempura" },
      { name: "Salmon Nigiri", price: 8.99, description: "Fresh salmon over pressed rice" },
    ]
  },
  { 
    id: 19,
    name: "Spice Route", 
    cuisine: "Indian", 
    rating: 4.6, 
    priceRange: "$$",
    imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    menu: [
      { name: "Chicken Tikka Masala", price: 13.99, description: "Grilled chicken in a creamy tomato sauce" },
      { name: "Vegetable Biryani", price: 11.99, description: "Fragrant rice dish with mixed vegetables" },
      { name: "Garlic Naan", price: 3.99, description: "Flatbread with garlic and herbs" },
    ]
  },
];

const FeaturedRestaurantDetailPage = () => {
  const { id } = useParams();
  const restaurant = featuredRestaurants.find(r => r.id === parseInt(id));
  const [cart, setCart] = useState([]);

  if (!restaurant) {
    return <div className="container mx-auto px-4 py-8">Featured Restaurant not found</div>;
  }

  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log(`Added ${item.name} to cart`);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-purple-100">
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="relative">
          <img src={restaurant.imageUrl} alt={restaurant.name} className="w-full h-64 object-cover" />
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

export default FeaturedRestaurantDetailPage;