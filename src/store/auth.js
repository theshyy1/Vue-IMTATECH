import { defineStore } from "pinia";
import { reactive } from "vue";
import { signin } from "../api/https";

const useAuthStore = defineStore("auth", () => {
  const userState = reactive({
    isLoggin: false,
    accessToken: null,
    user: null,
  });

  const login = async (user) => {
    try {
      const res = await signin(user);
      const data = res.data;
      if (data && data.accessToken) {
        userState.isLoggin = true;
        userState.accessToken = data.accessToken;
        userState.user = data.user;
      }
      return data;
    } catch (error) {
      console.log("Login error: " + error);
    }
  };

  return { userState, login };
});

export default useAuthStore;
