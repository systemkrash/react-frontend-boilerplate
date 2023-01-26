import React from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr';

import { PageContextServer } from './types.js';

import { getStore } from '../store/store.js';

import logoUrl from '/vite.svg';

const passToClient = ['pageProps', 'PRELOADED_STATE'];

async function onBeforeRender(pageContext: PageContextServer) {
  const store = getStore();

  const { Page, pageProps, urlPathname } = pageContext;
  const pageHtml = renderToString(
    <React.StrictMode>
      <HelmetProvider>
        <StaticRouter location={urlPathname}>
          <Provider store={store}>
            <Page {...pageProps} />
          </Provider>
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>
  );

  // Grab the initial state from our Redux store
  const PRELOADED_STATE = store.getState();

  return {
    pageContext: {
      PRELOADED_STATE,
      pageHtml,
    },
  };
}

async function render(pageContext: PageContextServer) {
  const { pageHtml }: any = pageContext;

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite + React + TS</title>
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>
`;
}

export { onBeforeRender };
export { render };
export { passToClient };
