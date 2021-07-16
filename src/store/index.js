import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let baseURL = "https://api.github.com/search/repositories?q=";
let userURL = "https://api.github.com/users/";

const store = new Vuex.Store({
  state: {
    users: null,
    userData: null,
  },
  mutations: {
    USER(state, userData) {
      state.userData = userData;
    },
    SET_USERS(state, user) {
      state.users = user;
    },
  },
  actions: {
    async USER_DATA({ commit }, login) {
      try {
        let response = await fetch(userURL + login);
        let userData = await response.json();
        commit("USER", userData);
      } catch (error) {
        console.log(error);
      }
    },
    async USERS({ commit }, text) {
      try {
        let response = await fetch(baseURL + text);
        let user = await response.json();
        commit("SET_USERS", user);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    GET_USERS(state) {
      return state.users.items;
    },
    GET_USER_DATA(state) {
      return state.userData;
    },
  },
});

export default store;
