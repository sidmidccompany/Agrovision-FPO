import React from 'react';
import {
  Home, ShoppingBag, Brain, CreditCard, Truck, Users,
  TrendingUp, Cloud, FileText, Settings, LogOut,
} from 'lucide-react';
import { useApp } from "../conntext/AppContext.tsx";

interface SidebarProps {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
}

interface MenuItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, closeSidebar }) => {
  const { activeSection, setActiveSection } = useApp();

  const menuItems: MenuItem[] = [
    { icon: Home, label: 'Dashboard', value: 'dashboard' },
    { icon: ShoppingBag, label: 'Market Intelligence', value: 'market' },
    { icon: Brain, label: 'AI Advisory', value: 'advisory' },
    { icon: CreditCard, label: 'Financial Services', value: 'financial' },
    { icon: Truck, label: 'Supply Chain', value: 'supply' },
    { icon: Users, label: 'Members', value: 'members' },
    { icon: TrendingUp, label: 'Analytics', value: 'analytics' },
    { icon: Cloud, label: 'Weather & Climate', value: 'weather' },
    { icon: FileText, label: 'Documents', value: 'documents' },
    { icon: Settings, label: 'Settings', value: 'settings' },
  ];

  return (
    <>
      {/* Overlay when sidebar is open on mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden transition-opacity ${
          isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeSidebar}
      />

      <aside
        className={`
    fixed top-0 left-0 z-40 w-64 h-full bg-gray-800
    transform transition-transform duration-300 ease-in-out
    md:translate-x-0 md:static md:h-screen
    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
  `}
      >
        <nav className="mt-16 md:mt-8" role="navigation">
          {menuItems.map(({ icon: Icon, label, value }) => (
            <button
              key={value}
              onClick={() => {
                setActiveSection(value);
                closeSidebar();
              }}
              className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-700 transition-colors ${
                activeSection === value ? 'bg-gray-700 border-l-4 border-green-500' : ''
              }`}
            >
              <Icon className="h-5 w-5 text-gray-300 mr-3" aria-hidden="true" />
              <span className="text-gray-300">{label}</span>
            </button>
          ))}
          <button
            className="w-full flex items-center px-6 py-3 text-left hover:bg-gray-700 transition-colors mt-8"
            onClick={() => {
              closeSidebar();
              console.log('Logout clicked');
            }}
          >
            <LogOut className="h-5 w-5 text-gray-300 mr-3" aria-hidden="true" />
            <span className="text-gray-300">Logout</span>
          </button>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
