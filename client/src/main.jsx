import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './features/store.js';

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>
);
