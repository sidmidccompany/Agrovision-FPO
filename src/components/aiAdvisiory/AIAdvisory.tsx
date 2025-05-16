import React from 'react';
import { Brain, Mic } from 'lucide-react';

const AIAdvisory = () => {
  return (
   <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">AI Agricultural Advisory</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <Brain className="h-6 w-6 text-purple-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-700">Kisan AI Assistant</h3>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 bg-purple-600 rounded-full flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-gray-800">Based on current weather patterns and soil analysis, I recommend applying 20kg/acre of NPK fertilizer in the next 3 days for optimal wheat growth.</p>
              <div className="mt-2 flex space-x-2">
                <button className="px-3 py-1 bg-purple-600 text-white rounded-lg text-sm">View Details</button>
                <button className="px-3 py-1 border border-purple-600 text-purple-600 rounded-lg text-sm">Schedule Task</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Voice Assistant</h3>
        <div className="text-center py-8">
          <Mic className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-4">Ask any farming question in your local language</p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center mx-auto">
            <Mic className="h-5 w-5 mr-2" />
            Start Voice Query
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAdvisory;