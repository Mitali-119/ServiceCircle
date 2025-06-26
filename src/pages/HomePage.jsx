import React from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { categories } from '../data/categories';
import ProviderCard from '../components/ProviderCard';

const HomePage = () => {
  const navigate = useNavigate();
  const { providers, searchQuery, setSearchQuery } = useApp();

  const handleCategoryClick = (categoryId) => {
    navigate(`/services/${categoryId}`);
  };



  const featuredProviders = providers.slice(0, 6);
  

  return (
  <div className="min-h-screen bg-gray-50">
    {/* Hero Section */}
    <div style={{ backgroundColor: '#0E2148' }} className="text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-16 sm:py-20">
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Find Trusted Local Professionals
          </h1>
          <h3 className="text-base sm:text-xl mb-6 sm:mb-8 text-blue-100">
            Connect with skilled service providers in your area
          </h3>
          <div className="max-w-2xl mx-auto relative">
            {/* Optional search bar or button can go here */}
          </div>
        </div>
      </div>
    </div>

    {/* Category Section */}
    <div className="max-w-screen-xl mx-auto px-4 py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
        Browse by Category
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            style={{ backgroundColor: "#B8CFCE" }}
            className="rounded-xl p-4 sm:p-6 text-center shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
          >
            <div className={`${category.color} w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
              <span className="text-xl sm:text-2xl">{category.icon}</span>
            </div>
            <h3 className="font-medium sm:font-semibold text-base sm:text-lg">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </div>

    {/* Featured Professionals */}
    <div className="max-w-screen-xl mx-auto px-4 py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
        Featured Professionals
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {featuredProviders.map((provider) => (
          <ProviderCard key={provider.id} provider={provider} />
        ))}
      </div>
    </div>
  </div>
);
};
export default HomePage;
