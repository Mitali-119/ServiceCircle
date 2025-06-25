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
      
      {/* <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white"> */}
     <div style={{ backgroundColor: '#0E2148' }} className="text-white">


        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Find Trusted Local Professionals</h1>
            <br></br>
            <h3 className="text-xl mb-8 text-blue-100">Connect with skilled service providers in your area</h3>
            <div className="max-w-2xl mx-auto relative">
              {/* <input
                type="text"
                placeholder="Search for services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pr-12 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        
              /> */}
              {/* <button
                onClick={handleSearch}
                 className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600"
             ></button> */}
              {/* <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" /> */}
            </div>
          </div>
        </div>
      </div>
<div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              style={{ backgroundColor: "#B8CFCE" }}
              className=" rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <span className="text-2xl">{category.icon}</span>
              </div>
              <h3 className="font-semibold text-lg">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Professionals */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Professionals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProviders.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
