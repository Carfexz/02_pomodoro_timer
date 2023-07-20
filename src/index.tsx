import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { setupStore } from './store/store';
import './styles/index.css'

const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);  