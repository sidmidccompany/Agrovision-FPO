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

interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  rainProbability: number;
  condition: string;
}

interface SearchResult {
  id: number;
  title: string;
  type: string;
}

export const api = {
  fetchYieldData: async (): Promise<YieldData[]> => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return [
        { month: 'Jan', yield: 4200, prediction: 4100 },
        { month: 'Feb', yield: 4500, prediction: 4400 },
        { month: 'Mar', yield: 4800, prediction: 4700 },
        { month: 'Apr', yield: 5200, prediction: 5100 },
        { month: 'May', yield: 5500, prediction: 5600 },
        { month: 'Jun', yield: 5800, prediction: 5900 }
      ];
    } catch (error) {
      throw new Error('Failed to fetch yield data');
    }
  },

  fetchMarketPrices: async (): Promise<MarketPrice[]> => {
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      return [
        { crop: 'Wheat', price: 2150, trend: '+5.2%' },
        { crop: 'Rice', price: 3200, trend: '+3.8%' },
        { crop: 'Cotton', price: 6500, trend: '-1.2%' },
        { crop: 'Sugarcane', price: 350, trend: '+2.5%' }
      ];
    } catch (error) {
      throw new Error('Failed to fetch market prices');
    }
  },

  fetchWeatherData: async (): Promise<WeatherData> => {
    try {
      await new Promise(resolve => setTimeout(resolve, 600));
      return {
        temperature: 28,
        humidity: 65,
        windSpeed: 12,
        rainProbability: 30,
        condition: 'Partly Cloudy'
      };
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  },

  searchQuery: async (query: string): Promise<SearchResult[]> => {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      return [
        { id: 1, title: 'Wheat cultivation guide', type: 'document' },
        { id: 2, title: 'Market price trends', type: 'report' },
        { id: 3, title: 'Weather forecast', type: 'weather' }
      ];
    } catch (error) {
      throw new Error('Search failed');
    }
  }
};