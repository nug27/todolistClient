// filepath: d:\Ngoding\Semster4\TutamSBD9\todo_list\src\config.js

// This will be used in development
const localApiUrl = 'http://localhost:3000';

// This will be used in production
const productionApiUrl = 'https://todolist-server-iota.vercel.app/';

// Determine which one to use based on the environment
export const API_URL = import.meta.env.MODE === 'production' 
  ? productionApiUrl 
  : localApiUrl;