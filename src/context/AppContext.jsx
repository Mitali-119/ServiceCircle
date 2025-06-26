
import React, { createContext, useContext, useState } from 'react';
import { mockProviders } from '../data/mockProviders';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [providers] = useState(mockProviders);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    rating: '',
    price: ''
  });
  const [sortBy, setSortBy] = useState('rating');

  const value = {
    providers,
    searchQuery,
    setSearchQuery,
    filters,
    setFilters,
    sortBy,
    setSortBy
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
