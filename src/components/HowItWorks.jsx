import React from 'react';
import { MapPin, Utensils, Truck } from 'lucide-react';

const Step = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="bg-purple-100 p-4 rounded-full mb-4">
      <Icon size={40} className="text-purple-600" />
    </div>
    <h3 className="font-bold text-xl mb-2 uppercase">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      icon: MapPin,
      title: "Choose location",
      description: "Enter your address to find nearby restaurants",
    },
    {
      icon: Utensils,
      title: "Order favorite food",
      description: "Browse menus and select your favorite dishes",
    },
    {
      icon: Truck,
      title: "Fast delivery",
      description: "Get your food delivered right to your doorstep",
    },
  ];

  return (
    <section className="py-8 pb-[50px] bg-purple-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Step key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;