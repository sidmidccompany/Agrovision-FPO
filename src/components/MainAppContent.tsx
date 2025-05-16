import React,{useState} from "react"
import { useApp } from '../components/conntext/AppContext';
import Header from "./layout/Header";
import Sidebar from './layout/Sidebar';
import Dashboard from './dashboard/Dashboard';
import MarketIntelligence from './marketIntelligence/MarketIntelligence';
import AIAdvisory from "./aiAdvisiory/AIAdvisory";
import FinancialServices from "./financialServices/FinancialServices";
import WeatherClimate from "./wheatherClimate/WeatherClimate";
import SupplyChain from "./supplyChain/SupplyChain";
import Members from './members/Members';
import Analytics from './anaylytics/Analytics';
import Documents from './documents/Documents';
import Settings from './settings/Settings';

const MainAppContent = () => {
    const { activeSection } = useApp();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // add state here


  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'market':
        return <MarketIntelligence />;
      case 'advisory':
        return <AIAdvisory />;
      case 'financial':
        return <FinancialServices />;
      case 'weather':
        return <WeatherClimate />;
      case 'supply':
        return <SupplyChain />;
      case 'members':
        return <Members />;
      case 'analytics':
        return <Analytics />;
      case 'documents':
        return <Documents />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
     <Header 
  isSidebarOpen={isSidebarOpen}
  toggleSidebar={() => setIsSidebarOpen(v => !v)}
/>
      <div className="flex">
         <Sidebar 
        isSidebarOpen={isSidebarOpen} 
        closeSidebar={() => setIsSidebarOpen(false)} 
      />
      
        <main className="flex-1">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default MainAppContent;