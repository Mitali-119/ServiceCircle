import React, { useMemo } from 'react';
import { ChevronLeft, Filter } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { categories } from '../data/categories';
import ProviderCard from '../components/ProviderCard';

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { providers, filters, setFilters, sortBy, setSortBy } = useApp();

  const categoryName = categories.find(cat => cat.id === category)?.name || 'Services';

  const filteredProviders = useMemo(() => {
    let result = providers.filter(provider => provider.category === category);

    // Apply filters
    if (filters.location) {
      result = result.filter(provider => provider.location === filters.location);
    }
    if (filters.rating) {
      result = result.filter(provider => provider.rating >= parseFloat(filters.rating));
    }

    // Apply sorting
    if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'price') {
      result.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseFloat(b.price.replace(/[^0-9]/g, ''));
        return priceA - priceB;
      });
    }

    return result;
  }, [providers, category, filters, sortBy]);

  return (
  <div className="min-h-screen bg-gray-50">
    <div className="max-w-screen-xl mx-auto px-4 py-6 sm:py-8">
      {/* Back + Heading */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-[#483AA0] hover:opacity-80 w-fit"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to Home
        </button>
        <h1 className="text-2xl sm:text-3xl font-bold">{categoryName} Services</h1>
      </div>

      {/* Filters and Sorting */}
      <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 items-start sm:items-center">
          {/* Filter Label */}
          <div className="flex items-center">
            <Filter className="w-5 h-5 mr-2 text-gray-500" />
            <span className="font-medium">Filters:</span>
          </div>

          {/* Location Filter */}
          <select
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full sm:w-auto"
          >
            <option value="">All Locations</option>
            <option value="Delhi">Delhi</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bihar">Bihar</option>
            <option value="Lucknow">Lucknow</option>
          </select>

          {/* Rating Filter */}
          <select
            value={filters.rating}
            onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full sm:w-auto"
          >
            <option value="">All Ratings</option>
            <option value="4">4+ Stars</option>
            <option value="4.5">4.5+ Stars</option>
            <option value="4.8">4.8+ Stars</option>
          </select>

          {/* Sort By */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full sm:w-auto"
          >
            <option value="rating">Top Rated</option>
            <option value="nearest">Nearest</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>

      {/* Providers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProviders.map((provider) => (
          <ProviderCard key={provider.id} provider={provider} />
        ))}
      </div>

      {/* No Results */}
      {filteredProviders.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No providers found matching your criteria.</p>
        </div>
      )}
    </div>
  </div>
);

};

export default CategoryPage;