import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Navigation';
import './App.scss';

const App: React.FC = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

export default App;
