import axios from "axios";

export default {
  state: {
    employees: [],
  },
  mutations: {
    SET_EMPLOYEES(state, employees) {
      state.employees = employees;
    },
  },
  actions: {
    GET_EMPLOYEES({ commit }) {
      return axios("http://localhost:3000/employees", {
        method: "GET",
      }).then((response) => {
        commit("SET_EMPLOYEES", response.data);
      });
    },
  },
  getters: {
    EMPLOYEES(state) {
      return state.employees;
    },
  },
};
