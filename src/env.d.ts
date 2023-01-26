/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly HTTPS: string;
  readonly HOST: string;
  readonly PORT: number;
  readonly SSL_KEY_FILE: string;
  readonly SSL_CRT_FILE: string;

  readonly VITE_TOKEN_KEY: string;
  readonly VITE_GRAPHQL_API_URI: string;

  readonly VITE_SOCIAL_REDIRECT_URI: string;

  readonly VITE_FACEBOOK_AUTHORIZATIONURL: string;
  readonly VITE_FACEBOOK_CLIENTID: string;
  readonly VITE_FACEBOOK_SCOPE: string;

  readonly VITE_GOOGLE_AUTHORIZATIONURL: string;
  readonly VITE_GOOGLE_CLIENT_ID: string;
  readonly VITE_GOOGLE_SCOPE: string;

  readonly VITE_LINKEDIN_AUTHORIZATIONURL: string;
  readonly VITE_LINKEDIN_CLIENT_ID: string;
  readonly VITE_LINKEDIN_SCOPE: string;

  readonly VITE_WWW: string;
  readonly VITE_SADMIN: string;
  readonly VITE_SEC: string;
  readonly VITE_WEDDINGS: string;
  readonly VITE_WEDDING: string;
  readonly VITE_PLAN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
