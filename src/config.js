// This will be used in development
const localApiUrl = 'http://localhost:3000';

// This will be used in production
const productionApiUrl = 'https://your-vercel-backend-url.vercel.app';

// Determine which one to use based on the environment
export const API_URL = import.meta.env.PROD 
  ? productionApiUrl 
  : localApiUrl;