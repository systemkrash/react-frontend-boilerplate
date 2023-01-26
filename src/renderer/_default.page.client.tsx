import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { PageContextClient } from './types.js';

import { getStore } from '../store/store.js';

async function render(pageContext: PageContextClient) {
  const { Page, PRELOADED_STATE }: any = pageContext;

  // We initilaize the store on every render because we use Server Routing. If we use Client Routing, then we should initialize the store only once instead.
  // (See https://vite-plugin-ssr.com/server-routing-vs-client-routing for more information about Client Routing and Server Routing.)
  const store = getStore(PRELOADED_STATE);

  hydrateRoot(
    document.getElementById('root') as HTMLElement,
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <Provider store={store}>
            <Page {...pageContext.pageProps} />
          </Provider>
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
}

export { render };
