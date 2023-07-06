import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App'
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter basename='/farm'>
      <App />
    </BrowserRouter>
  </Provider>
);

