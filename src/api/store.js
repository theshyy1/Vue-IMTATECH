import { createStore } from "vuex";
import axios from "axios";

const mainStore = createStore({
  state: {
    products: [],
    product: [],
  },
  mutations: {
    setProduct(state, product) {
      state.products = product;
    },
    getOne(state, product) {
      state.product = [product];
    },
    searchProduct(state, product) {
      state.products = [product];
    },
    addProduct(state, product) {
      let id = state.products.lenght + 1;
      product.id = id;
      state.products.push(product);
    },
    deleteProduct(state, id) {
      state.products = state.products.filter((item) => item.id !== id);
    },

    updateProduct(state, product) {
      state.product.forEach((item, i) => {
        if (item.id === product.id) {
          state.products[i] = product;
        }
      });
    },
  },
  getters: {
    getProduct: (state) => {
      return state.products;
    },
    getOne: (state) => {
      return state.product;
    },
  },
  actions: {
    async fetchProduct({ commit }, title) {
      try {
        const data = await axios.get(
          `http://localhost:3000/products?q=${title}`
        );
        commit("setProduct", data.data);
      } catch (error) {
        console.log(error);
      }
    },
    async getOnePrd({ commit }, id) {
      try {
        const data = await axios.get(`http://localhost:3000/products/${id}`);
        commit("getOne", data.data);
      } catch (error) {}
    },
    async deleteProduct({ commit }, id) {
      try {
        const confirm = window.confirm("Bạn có chắc muốn xóa sản phẩm không");
        if (confirm) {
          const data = await axios.delete(
            `http://localhost:3000/products/${id}`
          );
          commit("deleteProduct", id);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async addProduct({ commit }, product) {
      try {
        product.id = parseInt(product.id);
        const data = await axios.post(
          `http://localhost:3000/products`,
          product
        );
        commit("addProduct", product);
      } catch (error) {
        console.log(error);
      }
    },

    editProduct({ commit }, id) {
      console.log(id);
      console.log(this.state.products);
      const dataEdit = this.state.products.filter(
        (product) => product.id == id
      );
      return dataEdit;
    },
    async updateProduct({ commit, state }, product) {
      try {
        await axios.patch(
          `http://localhost:3000/products/${product.id}`,
          product
        );
        state.products.forEach((e) => {
          if (e.id === product.id) {
            commit("updateProduct", product);
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});

export default mainStore;
