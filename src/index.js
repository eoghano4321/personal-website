import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from "react-router-dom";
import GoogleTagManager from './GoogleTagManager.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <GoogleTagManager />
      <App />
    </Router>
);