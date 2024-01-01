import { defineStore } from "pinia";
import { reactive } from "vue";
import { signin } from "../api/https";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";

const useAuthStore = defineStore("auth", () => {
  const router = useRouter();

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

        if (data.user.admin === true) {
          await router.push("/admin");
        } else {
          await router.push("/");
        }
        toast.success("Login successful", {
          autoClose: 1500,
          position: "top-center",
          theme: "colored",
        });
      }
      return data;
    } catch (error) {
      console.log("Login error: " + error);
    }
  };

  return { userState, login };
});

export default useAuthStore;
