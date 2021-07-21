import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Navigation';
import './App.scss';
import { envMode } from './utils';

const App: React.FC = () => (
  <BrowserRouter>
    <Router />
    <p className="mode">
      Now app is running in {envMode} mode
    </p>
  </BrowserRouter>
);

export default App;
