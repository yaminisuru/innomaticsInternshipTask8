import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import './index.css';
import App from './App';


// Get the root element from the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the React app using createRoot (React 18+)
root.render(
  <React.StrictMode>
  
      <App />
  </React.StrictMode>
);
