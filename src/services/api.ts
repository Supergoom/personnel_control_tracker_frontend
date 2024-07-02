import axios from "axios";
import { MainConstant } from "../constants/constants";

const api = axios.create({
    baseURL: MainConstant.BASE_URL,
});

api.interceptors.request.use((config) => {
    config.params = {...config.params}

    return config;
});
  
  export default api;