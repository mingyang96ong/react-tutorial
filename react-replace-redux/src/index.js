import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import configureStore from './hooks-store/products-store';
// import productReducer from './store/reducers/products';
// import ProductsProvider from './context/products-context';

// const rootReducer = combineReducers({
//   shop: productReducer
// });

// const store = createStore(rootReducer);
configureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
  // <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </ProductsProvider>
  // </Provider>
);

