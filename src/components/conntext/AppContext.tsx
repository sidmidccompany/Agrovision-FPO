import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

import {api} from "../services/api.ts"

interface User {
  name: string;
  isPremium: boolean;
  language: string;
}

interface SearchResult {
  id: number;
  title: string;
  type: string;
}

interface AppContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
  user: User;
  notifications: number;
  setNotifications: (count: number) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: SearchResult[];
  searchData: (query: string) => Promise<void>;
  isSearching: boolean;
  changeLanguage: (lang: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [user, setUser] = useState<User>({
    name: 'Farmer Name',
    isPremium: true,
    language: 'en'
  });
  const [notifications, setNotifications] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const searchData = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    try {
      const results = await api.searchQuery(query);
      setSearchResults(results);
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const changeLanguage = (lang: string) => {
    setUser(prev => ({ ...prev, language: lang }));
  };

  const value = {
    activeSection,
    setActiveSection,
    user,
    notifications,
    setNotifications,
    searchQuery,
    setSearchQuery,
    searchResults,
    searchData,
    isSearching,
    changeLanguage
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};