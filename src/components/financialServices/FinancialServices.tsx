import React from 'react';
import { CreditCard, Shield, TrendingUp } from 'lucide-react';

const FinancialServices = () => {
  return (
<div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Financial Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <CreditCard className="h-8 w-8 text-blue-600 mb-3" />
          <h4 className="font-semibold text-gray-800">Credit Score</h4>
          <p className="text-3xl font-bold text-gray-900 my-2">750</p>
          <p className="text-sm text-green-600">Excellent</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Shield className="h-8 w-8 text-green-600 mb-3" />
          <h4 className="font-semibold text-gray-800">Insurance Coverage</h4>
          <p className="text-lg font-bold text-gray-900 my-2">₹10,00,000</p>
          <p className="text-sm text-gray-600">Crop + Equipment</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <TrendingUp className="h-8 w-8 text-purple-600 mb-3" />
          <h4 className="font-semibold text-gray-800">Active Loans</h4>
          <p className="text-lg font-bold text-gray-900 my-2">₹2,50,000</p>
          <p className="text-sm text-gray-600">Due: ₹15,000/month</p>
        </div>
      </div>
      
      <div className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-green-800 mb-4">Available Credit Line</h3>
        <div className="flex items-center justify-between mb-4">
          <p className="text-3xl font-bold text-green-800">₹5,00,000</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Apply Now</button>
        </div>
        <p className="text-sm text-green-700">Pre-approved based on your farming history and AI credit scoring</p>
      </div>
    </div>
  );
};

export default FinancialServices;