import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { 
  TrendingUp, Users, Activity, Brain, Camera, Map, Mic, Globe ,AlertCircle
} from 'lucide-react';
import { useApp } from "../conntext/AppContext.tsx"
import LoadingScreen from '../common/LoadingScreen';
import { api } from '../services/api';

interface YieldData {
  month: string;
  yield: number;
  prediction: number;
}

interface MarketPrice {
  crop: string;
  price: number;
  trend: string;
}

interface MemberStat {
  name: string;
  value: number;
}

const Dashboard = () => {
  const [yieldData, setYieldData] = useState<YieldData[]>([]);
  const [marketPrices, setMarketPrices] = useState<MarketPrice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const memberStats: MemberStat[] = [
    { name: 'Active Members', value: 1247 },
    { name: 'New Members', value: 89 },
    { name: 'Premium Members', value: 456 },
    { name: 'Inactive', value: 123 }
  ];

  const COLORS = ['#10B981', '#3B82F6', '#F59E0B', '#EF4444'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [yieldResponse, marketResponse] = await Promise.all([
          api.fetchYieldData(),
          api.fetchMarketPrices()
        ]);
        setYieldData(yieldResponse);
        setMarketPrices(marketResponse);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <LoadingScreen />;

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-50 border border-red-300 rounded-lg p-4">
          <AlertCircle className="h-6 w-6 text-red-600 inline mr-2" />
          <span className="text-red-800">Error loading dashboard: {error}</span>
        </div>
      </div>
    );
  }

  return (
    
<div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">₹24,56,000</p>
              <p className="text-sm text-green-600">+12.5% from last month</p>
            </div>
            <TrendingUp className="h-12 w-12 text-green-500" aria-hidden="true" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Members</p>
              <p className="text-2xl font-bold text-gray-900">1,247</p>
              <p className="text-sm text-blue-600">+89 new this month</p>
            </div>
            <Users className="h-12 w-12 text-blue-500" aria-hidden="true" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Crop Yield</p>
              <p className="text-2xl font-bold text-gray-900">5,800 MT</p>
              <p className="text-sm text-green-600">+21% increase</p>
            </div>
            <Activity className="h-12 w-12 text-orange-500" aria-hidden="true" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">AI Predictions</p>
              <p className="text-2xl font-bold text-gray-900">95.2%</p>
              <p className="text-sm text-purple-600">Accuracy rate</p>
            </div>
            <Brain className="h-12 w-12 text-purple-500" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Yield Analytics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={yieldData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="yield" stroke="#10B981" name="Actual Yield" />
              <Line type="monotone" dataKey="prediction" stroke="#3B82F6" name="AI Prediction" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Member Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={memberStats}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {memberStats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button 
            className="flex flex-col items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            aria-label="Scan crop for disease detection"
          >
            <Camera className="h-8 w-8 text-green-600 mb-2" aria-hidden="true" />
            <span className="text-sm text-gray-700">Scan Crop</span>
          </button>
          <button 
            className="flex flex-col items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            aria-label="View field map"
          >
            <Map className="h-8 w-8 text-blue-600 mb-2" aria-hidden="true" />
            <span className="text-sm text-gray-700">Field Map</span>
          </button>
          <button 
            className="flex flex-col items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            aria-label="Start voice query"
          >
            <Mic className="h-8 w-8 text-purple-600 mb-2" aria-hidden="true" />
            <span className="text-sm text-gray-700">Voice Query</span>
          </button>
          <button 
            className="flex flex-col items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            aria-label="Access market information"
          >
            <Globe className="h-8 w-8 text-orange-600 mb-2" aria-hidden="true" />
            <span className="text-sm text-gray-700">Market Access</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;