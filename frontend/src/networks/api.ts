import axios from "axios";
import CONFIG from "../configs/config";
import LOCAL_STORAGE from "./storage";
import { loginDto } from "../dtos/AuthDto";

const API = {
  AUTH: {
    LOGIN: async (data: loginDto) => {
      try {
        const response = await axios.post(
          `${CONFIG.BASE_URL}/auth/login`,
          data
        );

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
      }
    },
  },

  USER: {
    GET_LOGGED_USER: async () => {
      try {
        const response = await axios.get(`${CONFIG.BASE_URL}/user/logged`, {
          headers: {
            Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
          },
        });

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },
  },
};

export default API;
