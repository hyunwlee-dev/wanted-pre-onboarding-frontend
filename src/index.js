import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalStateProvider } from './contexts/GlobalStateContext';
import { SignInContextProvider } from './contexts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <SignInContextProvider>
        <App />
      </SignInContextProvider>
    </GlobalStateProvider>
  </React.StrictMode>
);
