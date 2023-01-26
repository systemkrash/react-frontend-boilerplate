import { gql, GraphQLClient, ClientError } from 'graphql-request';
import { BaseQueryApi } from '@reduxjs/toolkit/query/react';
import * as rtkQuery from '@reduxjs/toolkit/dist/query/react/index.js';
import { Variables } from 'graphql-request/dist/types.js';

import config from '../config/index.js';
import jwtToken from '../helpers/jwtToken.js';

const { createApi } = ((rtkQuery as any).default ??
  rtkQuery) as typeof rtkQuery;

const baseUrl = !import.meta.env.PROD
  ? config.apiUrl
  : 'https://api.divinety.local/graphql';

const client = new GraphQLClient(baseUrl, {
  credentials: 'include',
  mode: 'cors',
});

const graphqlBaseQuery =
  () =>
  async (
    {
      body,
      variables = {},
      headers = {},
    }: { body: string; variables: Variables; headers: HeadersInit },
    api: BaseQueryApi
  ) => {
    try {
      // set the Authroization Header here if token exists
      const token = jwtToken.getToken();
      // console.log(token);

      if (token) {
        headers = { ...headers, Authorization: `Bearer ${token}` };
      }

      const result = await client.request(body, variables, headers);

      return { data: result };
    } catch (error) {
      if (error instanceof ClientError) {
        if (/Session expired. Sign in again./i.test(error.message)) {
          // try {
          //   let token = jwtToken.getToken();

          //   if (token) {
          //     headers = { ...headers, Authorization: `Bearer ${token}` };
          //   }

          //   const refreshTokenResult = await client.request(
          //     gql`
          //       mutation Mutation {
          //         refreshToken {
          //           token
          //         }
          //       }
          //     `,
          //     {},
          //     headers
          //   );

          //   // set the token here
          //   jwtToken.setToken(refreshTokenResult.refreshToken.token);

          //   // retry the backend request
          //   token = jwtToken.getToken();

          //   if (token) {
          //     headers = { ...headers, Authorization: `Bearer ${token}` };
          //   }

          //   const result = await client.request(body, variables, headers);

          //   return { data: result };
          // } catch (refreshError) {
          //   // if the refresh token is expired
          //   api.dispatch(logout());
          //   window.location.href = '/sign-in';
          // }

          return { error: { status: error.response.status, data: error } };
        }

        return { error: { status: error.response.status, data: error } };
      }

      return { error: { status: 500, data: error } };
    }
  };

export const apiService = createApi({
  baseQuery: graphqlBaseQuery(),
  endpoints: () => ({}),
});
