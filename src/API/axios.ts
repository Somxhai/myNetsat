import axios from "axios";

export const client = axios.create({ baseURL: "https://netsat-api.vercel.app/" });
