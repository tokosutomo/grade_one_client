import axios from "axios";

const AppAxios = axios.create({
  baseURL: `${
    import.meta.env.VITE_NODE_ENV === "production"
      ? import.meta.env.VITE_VERCEL_URL
      : "http://localhost:3000"
  }/api`,
});

export default AppAxios;
