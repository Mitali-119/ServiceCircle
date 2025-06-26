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
    <div className="max-w-screen-xl mx-auto px-4 py-6 sm:py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-[#483AA0] hover:opacity-80 mb-6"
      >
        <ChevronLeft className="w-5 h-5 mr-1" />
        Back
      </button>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-1/3">
            <img
              src={selectedProvider.image}
              alt={selectedProvider.name}
              className="w-full h-64 sm:h-80 md:h-full object-cover"
            />
          </div>

          {/* Info Section */}
          <div className="md:w-2/3 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                  {selectedProvider.name}
                </h1>
                <p className="text-lg text-gray-600 mb-3">{selectedProvider.categoryDisplay}</p>

                <div className="flex items-center mb-4">
                  <StarRating rating={selectedProvider.rating} size="w-5 h-5" />
                  <span className="ml-2 text-base">
                    {selectedProvider.rating} ({selectedProvider.reviews} reviews)
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-gray-500 mr-2" />
                    <span>{selectedProvider.location}</span>
                  </div>
                  <div className="flex items-center">
                    <IndianRupee className="w-5 h-5 text-gray-500 mr-2" />
                    <span className="text-lg font-semibold text-blue-600">
                      {selectedProvider.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Button */}
              <button
                onClick={() => setShowContactModal(true)}
                className="bg-[#483AA0] text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center w-fit"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="p-6 sm:p-8 border-t">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">About</h3>
          <p className="text-gray-700 leading-relaxed">{selectedProvider.description}</p>
        </div>

        {/* Gallery */}
        {selectedProvider.gallery && (
          <div className="p-6 sm:p-8 border-t">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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

        {/* Reviews */}
        <div className="p-6 sm:p-8 border-t">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Reviews</h3>
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

      {/* Contact Modal */}
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
