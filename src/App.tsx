import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import Header from './components/Header';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Routes />
    <ToastContainer autoClose={3000} />
    <GlobalStyle />
  </BrowserRouter>
);
export default App;
