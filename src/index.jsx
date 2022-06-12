import React from 'react';
import { createRoot } from 'react-dom/client';
import { PrismicProvider } from '@prismicio/react';
import { Provider } from 'react-redux';
import { App } from './components/App';
import { configureStore } from './redux/store';
import { client } from './prismic';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
const store = configureStore();

root.render(
  <Provider store={store}>
    <PrismicProvider client={client}>
      <App />
    </PrismicProvider>
  </Provider>,
);
