import React, { useState } from 'react';
import { ChevronLeft, Camera, Mail, Phone } from 'lucide-react';
import {  useNavigate } from 'react-router-dom';
import { categories } from '../data/categories'; 
import { toast } from 'react-toastify';

const RegisterPage = ({ setCurrentPage }) => {
  const [registrationStep, setRegistrationStep] = useState(1);
  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    description: '',
    price: '',
    location: ''
  });

  const nextStep = () => {
    if (registrationStep < 4) {
      setRegistrationStep(registrationStep + 1);
    }
  };

  const prevStep = () => {
    if (registrationStep > 1) {
      setRegistrationStep(registrationStep - 1);
    }
  };

  const handleInputChange = (field, value) => {
    setRegistrationData({ ...registrationData, [field]: value });
  };

   const navigate = useNavigate();

const [profilePhotoPreview, setProfilePhotoPreview] = useState(null);
const [workSamplesPreview, setWorkSamplesPreview] = useState([]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <button
           onClick={() => navigate('/')}
            className="flex items-center text-blue-600 hover:text-blue-800 mr-4"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to Home
        </button>

        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8">Register as a Service Provider</h1>

          {/* Progress Bar */}
          <div className="flex items-center mb-8">
            {[1, 2, 3, 4].map((step) => (
              <React.Fragment key={step}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step <= registrationStep ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {step}
                </div>
                {step < 4 && (
                  <div className={`flex-1 h-1 mx-2 ${
                    step < registrationStep ? 'bg-blue-600' : 'bg-gray-300'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Step Content */}
          {registrationStep === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
              <input type="text" value={registrationData.name} onChange={(e) => handleInputChange('name', e.target.value)} placeholder="Full Name" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
              <input type="email" value={registrationData.email} onChange={(e) => handleInputChange('email', e.target.value)} placeholder="Email" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
              <input type="tel" value={registrationData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} placeholder="Phone" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
              <select value={registrationData.location} onChange={(e) => handleInputChange('location', e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2">
                <option value="">Select Location</option>
              <option value="Delhi">Delhi</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bihar">Bihar</option>
              <option value="Lucknow">Lucknow</option>
              <option value="Other">Other</option>
              </select>
            </div>
          )}

          {registrationStep === 2 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Skills & Pricing</h2>
              <select value={registrationData.category} onChange={(e) => handleInputChange('category', e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2">
                <option value="">Select Category</option>
                 {Array.isArray(categories) && categories.length > 0 ? (
                  categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                     ))
                  ) : (
                  <option disabled>No categories available</option>
                  )}
              </select>
              <input type="text" value={registrationData.price} onChange={(e) => handleInputChange('price', e.target.value)} placeholder="e.g., ₹500/hour" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
              <textarea value={registrationData.description} onChange={(e) => handleInputChange('description', e.target.value)} placeholder="Describe your services and experience..." className="w-full border border-gray-300 rounded-lg px-3 py-2 h-32" />
            </div>
          )}

          {registrationStep === 3 && (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold mb-4">Profile Images</h2>

    {/* Profile Photo Upload */}
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
      <Camera className="w-10 h-10 text-gray-400 mx-auto mb-2" />
      <p className="text-gray-600 mb-2">Upload your profile photo</p>

      <input
        type="file"
        accept="image/*"
        id="profilePhoto"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            setProfilePhotoPreview(URL.createObjectURL(file));
          }
        }}
      />
      <label htmlFor="profilePhoto">
        <span className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 inline-block">
          Choose File
        </span>
      </label>

      {/* Preview */}
      {profilePhotoPreview && (
        <img
          src={profilePhotoPreview}
          alt="Profile Preview"
          className="mx-auto mt-4 w-32 h-32 object-cover rounded-full border"
        />
      )}
    </div>

    {/* Work Samples Upload */}
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
      <Camera className="w-10 h-10 text-gray-400 mx-auto mb-2" />
      <p className="text-gray-600 mb-2">Upload work samples (optional)</p>

      <input
        type="file"
        accept="image/*"
        id="workSamples"
        multiple
        className="hidden"
        onChange={(e) => {
          const files = Array.from(e.target.files);
          const previews = files.map(file => URL.createObjectURL(file));
          setWorkSamplesPreview(previews);
        }}
      />
      <label htmlFor="workSamples">
        <span className="cursor-pointer bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 inline-block">
          Choose Files
        </span>
      </label>

      {/* Preview */}
      {workSamplesPreview.length > 0 && (
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          {workSamplesPreview.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Sample ${index + 1}`}
              className="w-24 h-24 object-cover rounded-md border"
            />
          ))}
        </div>
      )}
    </div>
  </div>
)}



          {registrationStep === 4 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Preview & Submit</h2>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">{registrationData.name}</h3>
                <p className="text-gray-600 mb-1">{registrationData.category}</p>
                <p className="text-gray-600 mb-1">{registrationData.location}</p>
                <p className="font-semibold text-blue-600 mb-2">{registrationData.price}</p>
                <p className="text-gray-700">{registrationData.description}</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800">Your profile looks great! Click submit to complete your registration.</p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {registrationStep > 1 ? (
              <button onClick={prevStep} className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Previous</button>
            ) : <div />}

            {registrationStep < 4 ? (
              <button onClick={nextStep} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Next</button>
            ) : (
              <button
  onClick={() => {
    toast.success('Registration submitted successfully!');
    navigate('/'); // 👈 Redirects to homepage
    setRegistrationStep(1);
    setRegistrationData({
      name: '',
      email: '',
      phone: '',
      category: '',
      description: '',
      price: '',
      location: ''
    });
  }}
  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
>
  Submit Registration
</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
