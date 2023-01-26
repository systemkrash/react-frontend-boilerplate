/* eslint-disable import/no-anonymous-default-export */
export default {
  base: {
    server: import.meta.env.VITE_BASE_SERVER || '/',
    assets: process.env.VITE_BASE_ASSETS || 'https://cdn.divinety.local',
  },
  tokenKey: import.meta.env.VITE_TOKEN_KEY || 'x-token',
  apiUrl:
    import.meta.env.VITE_GRAPHQL_API_URI || 'https://api.divinety.com/graphql',
  social: {
    facebook: {
      authorizationUrl:
        import.meta.env.VITE_FACEBOOK_AUTHORIZATIONURL ||
        'https://accounts.google.com/o/oauth2/auth',
      clientId: import.meta.env.VITE_FACEBOOK_CLIENTID || '5977494472278540',
      redirectUri: import.meta.env.VITE_SOCIAL_REDIRECT_URI,
      scope: import.meta.env.VITE_FACEBOOK_SCOPE || 'public_profile email',
    },
    google: {
      authorizationUrl:
        import.meta.env.VITE_GOOGLE_AUTHORIZATIONURL ||
        'https://accounts.google.com/o/oauth2/auth',
      clientId:
        import.meta.env.VITE_GOOGLE_CLIENT_ID ||
        '65081235481-5170n7r59hs7qts2q8qoqu486r6nido9.apps.googleusercontent.com',
      redirectUri: import.meta.env.VITE_SOCIAL_REDIRECT_URI,
      scope: import.meta.env.VITE_FACEBOOK_SCOPE || 'profile email openid',
    },
    linkedin: {
      authorizationUrl:
        import.meta.env.VITE_LINKEDIN_AUTHORIZATIONURL ||
        'https://www.linkedin.com/oauth/v2/authorization',
      clientId: import.meta.env.VITE_LINKEDIN_CLIENT_ID,
      redirectUri: import.meta.env.VITE_SOCIAL_REDIRECT_URI,
      scope: import.meta.env.VITE_LINKEDIN_SCOPE,
    },
  },
  subdomains: {
    www: import.meta.env.VITE_WWW || 'https://www.divinety.com',
    sadmin: import.meta.env.VITE_SADMIN || 'https://sadmin.divinety.com',
    sec: import.meta.env.VITE_SEC || 'https://sec.divinety.com',
    weddings: import.meta.env.VITE_WEDDINGS || 'https://weddings.divinety.com',
    wedding: import.meta.env.VITE_WEDDING || 'https://wedding.divinety.com',
    plan: import.meta.env.VITE_PLAN || 'https://plan.divinety.com',
  },
};
