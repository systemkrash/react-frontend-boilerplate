import { PreloadedState } from '@reduxjs/toolkit';
import * as toolkitRaw from '@reduxjs/toolkit';
import * as rtkQuery from '@reduxjs/toolkit/dist/query/react/index.js';

import { apiService } from './api.js';
import counterReducer from '../components/Counter/counterSlice.js';

const { configureStore } = ((toolkitRaw as any).default ??
  toolkitRaw) as typeof toolkitRaw;
const { setupListeners } = ((rtkQuery as any).default ??
  rtkQuery) as typeof rtkQuery;

export function getStore(preloadedState?: PreloadedState<any>) {
  const store = configureStore({
    // Add the generated reducer as a specific top-level slice
    reducer: {
      [apiService.reducerPath]: apiService.reducer,
      counter: counterReducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(apiService.middleware),
    preloadedState,
    devTools: import.meta.env.DEV,
  });

  // optional, but required for refetchOnFocus/refetchOnReconnect behaviors
  // see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
  setupListeners(store.dispatch);

  return store;
}

const store = getStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
