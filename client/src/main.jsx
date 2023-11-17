import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './features/store.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoginModal from './components/body/LoginModal.jsx';

const queryClient = new QueryClient();
export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        {/* <Route path='/register' element={<LoginModal />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Root />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
