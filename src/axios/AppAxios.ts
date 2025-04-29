import axios from "axios";

const AppAxios = axios.create({
  baseURL: `${
    import.meta.env.NODE_ENV === "production"
      ? import.meta.env.VERCEL_URL
      : "http://localhost:3000"
  }/api`,
});

export default AppAxios;
