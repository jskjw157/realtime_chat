import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/tailwind.css'; // Tailwind CSS 적용
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);