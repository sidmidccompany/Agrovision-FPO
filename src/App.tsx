import React from 'react';
import ErrorBoundary from './components/common/ErrorBoundary';
import { AppProvider } from "./components/conntext/AppContext"
import MainAppContent from './components/MainAppContent';

const AgrovisionFPO = () => {
  return (
    <ErrorBoundary>
      <AppProvider>
        <MainAppContent />
      </AppProvider>
    </ErrorBoundary>
  );
};

export default AgrovisionFPO;