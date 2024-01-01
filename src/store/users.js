import { defineStore } from "pinia";
import { manaUsers, updateUser } from "../api/https";
import { reactive } from "vue";

const useUsers = defineStore("users", {
  state: () => ({
    users: [],
  }),
  actions: {
    async getAll() {
      try {
        const data = await manaUsers();
        this.users = data.data;
        return data.data;
      } catch (error) {
        console.log("Users manager error: ", error);
      }
    },
    async update(user) {
      try {
        const data = await updateUser(user);
        return data;
      } catch (error) {
        console.log("User update error: ", error);
      }
    },
  },
});

export default useUsers;
