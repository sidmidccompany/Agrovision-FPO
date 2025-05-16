import React, { useState, useEffect } from 'react';
import { useApp } from "../conntext/AppContext.tsx"
import LoadingScreen from '../common/LoadingScreen';
import { api } from '../services/api';

interface MarketPrice {
  crop: string;
  price: number;
  trend: string;
}

const MarketIntelligence = () => {
  const [marketData, setMarketData] = useState<MarketPrice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.fetchMarketPrices();
        setMarketData(data);
      } catch (error) {
        console.error('Error fetching market data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <LoadingScreen />;

  return (
   <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Market Intelligence</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {marketData.map((crop) => (
          <div key={crop.crop} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-800">{crop.crop}</h3>
            <p className="text-2xl font-bold text-gray-900 my-2">₹{crop.price}</p>
            <p className={`text-sm ${crop.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              {crop.trend}
            </p>
          </div>
        ))}
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Price Trends</h3>
        <p className="text-gray-600">Advanced market analytics and price predictions coming soon...</p>
      </div>
    </div>
  );
};

export default MarketIntelligence;