import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5174", // Update this to match your Laravel backend
  withCredentials: true,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    Accept: "application/json",
  },
});

export const login = async (email: string, password: string) => {
  await api.get("/sanctum/csrf-cookie");
  return api.post("/login", { email, password });
};

export const signup = async (email: string, password: string) => {
  await api.get("/sanctum/csrf-cookie");
  return api.post("/register", { name: email.split("@")[0], email, password });
};

export const logout = async () => {
  return api.post("/logout");
};

export default api;

