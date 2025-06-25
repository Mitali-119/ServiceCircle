import React, { useState } from 'react';
import { ChevronLeft, MapPin, IndianRupee, Mail } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { mockReviews } from '../data/mockReviews';
import StarRating from '../components/StarRating';
import ContactModal from '../components/ContactModal';

const ProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { providers } = useApp();
  const [showContactModal, setShowContactModal] = useState(false);

  const selectedProvider = providers.find(p => p.id === parseInt(id));

  if (!selectedProvider) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Provider not found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-800"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src={selectedProvider.image} 
                alt={selectedProvider.name}
                className="w-full h-80 md:h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{selectedProvider.name}</h1>
                  <p className="text-xl text-gray-600 mb-4">{selectedProvider.categoryDisplay}</p>
                  <div className="flex items-center mb-4">
                    <StarRating rating={selectedProvider.rating} size="w-5 h-5" />
                    <span className="ml-2 text-lg">
                      {selectedProvider.rating} ({selectedProvider.reviews} reviews)
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-gray-500 mr-2" />
                      <span>{selectedProvider.location}</span>
                    </div>
                    <div className="flex items-center">
                      <IndianRupee className="w-5 h-5 text-gray-500 mr-2" />

                      <span className="text-xl font-semibold text-blue-600">{selectedProvider.price}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setShowContactModal(true)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  
                </button>
              </div>
            </div>
          </div>

          <div className="p-8 border-t">
            <h3 className="text-xl font-semibold mb-4">About</h3>
            <p className="text-gray-700 leading-relaxed">{selectedProvider.description}</p>
          </div>

          {selectedProvider.gallery && (
            <div className="p-8 border-t">
              <h3 className="text-xl font-semibold mb-4">Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {selectedProvider.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Work sample ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          )}

          <div className="p-8 border-t">
            <h3 className="text-xl font-semibold mb-4">Reviews</h3>
            <div className="space-y-4">
              {mockReviews.map((review) => (
                <div key={review.id} className="border-b pb-4 last:border-b-0">
                  <div className="flex items-center mb-2">
                    <StarRating rating={review.rating} />
                    <span className="ml-2 font-medium">{review.name}</span>
                    <span className="ml-auto text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {showContactModal && (
          <ContactModal
            provider={selectedProvider}
            onClose={() => setShowContactModal(false)}
          />
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
