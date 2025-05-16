import React from 'react';
import { Leaf, Menu, X } from 'lucide-react';

interface HeaderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Sidebar toggle button - visible only on mobile */}
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Branding */}
          <div className="flex items-center ml-2">
            <Leaf className="h-8 w-8 text-green-600" aria-hidden="true" />
            <span className="ml-2 text-xl font-bold text-gray-800 cursor-pointer">
              Agrovision FPO
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
