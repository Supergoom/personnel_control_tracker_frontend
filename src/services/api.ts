import axios from "axios";
import { MainConstant } from "../constants/constants";
import { useClinicStore } from "../store/clinic";

const api = axios.create({
    baseURL: MainConstant.BASE_URL,
});

api.interceptors.request.use((config) => {
    config.params = {...config.params, clinic_id: useClinicStore.getState().activeId}

    return config;
});
  
  export default api;