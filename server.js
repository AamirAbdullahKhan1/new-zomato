  import express from 'express';
  import cors from 'cors';

  const app = express();
  const port = 3001;

  app.use(cors());
  app.use(express.json());

  const restaurants = [
    { id: 1, name: "Spice Paradise", cuisine: "Indian" },
    { id: 2, name: "Sushi Haven", cuisine: "Japanese" },
    { id: 3, name: "Pasta Palace", cuisine: "Italian" },
    { id: 4, name: "Burger Bliss", cuisine: "American" },
    { id: 5, name: "Wok & Roll", cuisine: "Chinese" },
  ];

  const dishes = [
    { id: 1, name: "Chicken Tikka Masala", restaurantId: 1 },
    { id: 2, name: "Sushi Platter", restaurantId: 2 },
    { id: 3, name: "Margherita Pizza", restaurantId: 3 },
    { id: 4, name: "Classic Cheeseburger", restaurantId: 4 },
    { id: 5, name: "Kung Pao Chicken", restaurantId: 5 },
    { id: 6, name: "Butter Chicken", restaurantId: 1 },
    { id: 7, name: "California Roll", restaurantId: 2 },
    { id: 8, name: "Fettuccine Alfredo", restaurantId: 3 },
    { id: 9, name: "BBQ Bacon Burger", restaurantId: 4 },
    { id: 10, name: "Sweet and Sour Pork", restaurantId: 5 },
  ];

  const mealData = {
    breakfast: [
      { id: 1, name: "Avocado Toast", description: "Smashed avocado on whole grain toast", price: 8.99, image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=300&q=80" },
      { id: 2, name: "Pancake Stack", description: "Fluffy pancakes with maple syrup", price: 7.99, image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=300&q=80" },
      { id: 3, name: "Eggs Benedict", description: "Poached eggs on English muffin with hollandaise", price: 10.99, image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=300&q=80" }
    ],
    lunch: [
      { id: 1, name: "Chicken Caesar Salad", description: "Grilled chicken with romaine and Caesar dressing", price: 11.99, image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=300&q=80" },
      { id: 2, name: "Veggie Wrap", description: "Mixed vegetables in a whole wheat wrap", price: 9.99, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=300&q=80" },
      { id: 3, name: "Margherita Pizza", description: "Classic pizza with tomato, mozzarella, and basil", price: 12.99, image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=300&q=80" }
    ],
    dinner: [
      { id: 1, name: "Grilled Salmon", description: "Atlantic salmon with roasted vegetables", price: 18.99, image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=300&q=80" },
      { id: 2, name: "Steak Frites", description: "Sirloin steak with crispy fries", price: 21.99, image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=300&q=80" },
      { id: 3, name: "Vegetable Curry", description: "Mixed vegetable curry with basmati rice", price: 14.99, image: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?auto=format&fit=crop&w=300&q=80" }
    ],
    snacks: [
      { id: 1, name: "Fruit and Cheese Plate", description: "Assorted fruits and artisanal cheeses", price: 9.99, image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=300&q=80" },
      { id: 2, name: "Nachos", description: "Tortilla chips with melted cheese and toppings", price: 8.99, image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=300&q=80" },
      { id: 3, name: "Hummus Platter", description: "Homemade hummus with pita and vegetables", price: 7.99, image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=300&q=80" }
    ],
    drinks: [
      { id: 1, name: "Iced Latte", description: "Espresso with cold milk over ice", price: 4.99, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=300&q=80" },
      { id: 2, name: "Fresh Orange Juice", description: "Freshly squeezed orange juice", price: 3.99, image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=300&q=80" },
      { id: 3, name: "Strawberry Smoothie", description: "Blend of fresh strawberries and yogurt", price: 5.99, image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=300&q=80" }
    ],
    nightlife: [
      { id: 1, name: "Classic Martini", description: "Gin or vodka with a touch of vermouth", price: 12.99, image: "https://images.unsplash.com/photo-1575023782549-62ca0d244b39?auto=format&fit=crop&w=300&q=80" },
      { id: 2, name: "Craft Beer Flight", description: "Selection of four local craft beers", price: 14.99, image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=300&q=80" },
      { id: 3, name: "Cheese Board", description: "Assortment of fine cheeses with crackers", price: 16.99, image: "https://images.unsplash.com/photo-1631379578550-7038263db699?auto=format&fit=crop&w=300&q=80" }
    ]
  };

  app.get('/api/meals/:mealType', (req, res) => {
    const { mealType } = req.params;
    const meals = mealData[mealType.toLowerCase()];
    
    if (meals) {
      res.json(meals);
    } else {
      res.status(404).json({ error: 'Meal type not found' });
    }
  });

  app.get('/api/search', (req, res) => {
    const query = req.query.q.toLowerCase();
    const results = [];
  
    dishes.forEach(dish => {
      if (dish.name.toLowerCase().includes(query)) {
        const restaurant = restaurants.find(r => r.id === dish.restaurantId);
        results.push({
          name: dish.name,
          restaurant: restaurant.name,
          restaurantId: restaurant.id
        });
      }
    });

    restaurants.forEach(restaurant => {
      if (restaurant.name.toLowerCase().includes(query) || restaurant.cuisine.toLowerCase().includes(query)) {
        results.push({
          name: restaurant.name,
          restaurant: restaurant.cuisine,
          restaurantId: restaurant.id
        });
      }
    });
  
    res.json(results);
  });

  app.get('/api/restaurant/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const restaurant = restaurants.find(r => r.id === id);
    
    if (restaurant) {
      const restaurantDishes = dishes.filter(d => d.restaurantId === id);
      res.json({
        ...restaurant,
        dishes: restaurantDishes
      });
    } else {
      res.status(404).json({ error: 'Restaurant not found' });
    }
  });

  app.listen(port, () => {
    console.log(`API server running on http://localhost:${port}`);
  });

  // For testing purposes, let's make a request to one of our endpoints
  fetch('http://localhost:3001/api/meals/breakfast')
    .then(response => response.json())
    .then(data => console.log('Sample API response for breakfast:', data))
    .catch(error => console.error('Error:', error))