import { createRoot } from 'react-dom/client';
import { PrismicProvider } from '@prismicio/react';
import { client } from './prismic';
import { App } from './components/App';

import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <PrismicProvider client={client}>
    <App />
  </PrismicProvider>,
);
