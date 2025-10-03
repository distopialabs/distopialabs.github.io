import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { ScrollToTop } from './components/ScrollToTop';

export function AppRouter() {
  return <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>;
}