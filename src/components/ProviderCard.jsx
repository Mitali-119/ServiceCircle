import React from 'react';
import { MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import StarRating from './StarRating';

const ProviderCard = ({ provider }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profile/${provider.id}`);
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
      onClick={handleClick}
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={provider.image} 
          alt={provider.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{provider.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{provider.categoryDisplay}</p>
        <div className="flex items-center mb-2">
          <StarRating rating={provider.rating} />
          <span className="ml-2 text-sm text-gray-600">
            {provider.rating} ({provider.reviews} reviews)
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-1" />
            {provider.location}
          </div>
          <span className="font-semibold text-blue-600">{provider.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProviderCard;