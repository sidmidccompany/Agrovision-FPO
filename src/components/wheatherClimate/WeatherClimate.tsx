import React, { useState, useEffect } from 'react';
import { Cloud, Activity, Leaf, TrendingUp } from 'lucide-react';
import LoadingScreen from '../common/LoadingScreen';
import { api } from '../services/api';

interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  rainProbability: number;
  condition: string;
}

const WeatherClimate = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await api.fetchWeatherData();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  if (loading) return <LoadingScreen />;

  return (
  <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Weather & Climate Intelligence</h1>
      
      {weatherData && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <Cloud className="h-12 w-12 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{weatherData.temperature}°C</p>
            <p className="text-sm text-gray-600">{weatherData.condition}</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <Activity className="h-12 w-12 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{weatherData.humidity}%</p>
            <p className="text-sm text-gray-600">Humidity</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <Leaf className="h-12 w-12 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{weatherData.windSpeed} km/h</p>
            <p className="text-sm text-gray-600">Wind Speed</p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg text-center">
            <TrendingUp className="h-12 w-12 text-yellow-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{weatherData.rainProbability}%</p>
            <p className="text-sm text-gray-600">Rain Probability</p>
          </div>
        </div>
      )}
      
      <div className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-green-800 mb-3">AI Weather Advisory</h3>
        <p className="text-green-700 mb-3">Based on weather predictions, optimal sowing window for wheat starts in 3 days. Soil moisture levels are ideal for planting.</p>
        <div className="flex space-x-3">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Set Reminder</button>
          <button className="border border-green-600 text-green-600 px-4 py-2 rounded-lg">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default WeatherClimate;