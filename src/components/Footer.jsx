import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { categories } from '../data/categories';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Service Circle</h3>
          <p className="text-gray-300">
            Connecting you with trusted local service providers.
            Connect. Hire. Done
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-300">
            {categories.map((cat) => (
              <li key={cat.id}>{cat.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <div className="space-y-2 text-gray-300">
            <div className="flex items-center">
              
              <span></span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>support@ServiceCircle.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
        <p>&copy; 2025 ServiceCircle — Trusted locally. Built by Mitali❤️</p>
      </div>
    </div>
  </footer>
);

export default Footer;
