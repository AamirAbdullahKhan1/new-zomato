import React from 'react';
import { Link } from 'react-router-dom';
import { Pizza, Coffee, IceCream, Salad } from 'lucide-react';

const CategoryCard = ({ name, icon: Icon, path }) => (
  <Link to={path} className="block" onClick={() => window.scrollTo(0,0)}>
    <div className="flex flex-col items-center bg-white p-6 py-10 rounded-lg shadow-md transition-colors duration-300 hover:bg-green-300">
      <Icon size={48} className="text-purple-600 mb-4" />
      <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
    </div>
  </Link>
);

const Categories = () => {
  const categories = [
    { name: "Pizza", icon: Pizza, path: "/pizzapage" },
    { name: "Coffee", icon: Coffee, path: "/coffeepage" },
    { name: "Desserts", icon: IceCream, path: "/dessertspage" },
    { name: "Healthy", icon: Salad, path: "/healthypage" },
  ];

  return (
    <section className="py-10 bg-purple-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-800 uppercase">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;