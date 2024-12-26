import React, { useState } from 'react';
import { Coffee, Sun, Moon, Cookie, Beer, Music } from 'lucide-react';
import MealSection from './MealSection';

const QuickSearch = () => {
  const [selectedMeal, setSelectedMeal] = useState(null);

  const meals = [
    { name: 'Breakfast', icon: Coffee },
    { name: 'Lunch', icon: Sun },
    { name: 'Dinner', icon: Moon },
    { name: 'Snacks', icon: Cookie },
    { name: 'Drinks', icon: Beer },
    { name: 'Nightlife', icon: Music },
  ];

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
  };

  return (
    <section className="py-16 bg-purple-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Quick Search</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {meals.map((meal) => (
            <button
              key={meal.name}
              onClick={() => handleMealClick(meal.name)}
              className={`flex flex-col items-center justify-center p-4 bg-white rounded-lg py-8 shadow-md transition-all duration-300 hover:shadow-lg ${
                selectedMeal === meal.name ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              <meal.icon size={32} className="text-purple-600 mb-2" />
              <span className="font-medium text-gray-800">{meal.name}</span>
            </button>
          ))}
        </div>
        {selectedMeal && <MealSection meal={selectedMeal} />}
      </div>
    </section>
  );
};

export default QuickSearch;