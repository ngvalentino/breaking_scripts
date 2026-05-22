import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from '../app/page';

// @ts-expect-error - Vite handles CSS imports natively
import '../public/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);