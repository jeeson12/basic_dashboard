import axios from "axios";

const APIURL = import.meta.env.VITE_API_URL; // Must start with VITE_ in Vite

const instance = axios.create({
  baseURL: APIURL,
  headers: {
    "Content-Type": "application/json", // Default header
  },
});

// Request Interceptor
instance.interceptors.request.use(
  (config) => {
    // Add your custom header
    config.headers["skip_zrok_interstitial"] = "true";

    // Optionally add an auth token
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error) // pass errors to .catch()
);

export default instance;
