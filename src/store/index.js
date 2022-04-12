import Vue from "vue";
import Vuex from "vuex";
import { getMeals } from "../api/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    meals: [],
    cart: []
  },
  mutations: {
    setMeals(state, meals) {
      state.meals = meals;
    },
    addToCart(state, item) {
      if (!state.cart.includes(item)) {
        item.quantity = 1;
        state.cart.push(item);
      } else {
        for (let i = 0; i < state.cart.length; i++) {
          if (state.cart[i] === item) {
            state.cart[i].quantity += 1;
          }
        }
      }
    },
    deleteFromCart(state, item) {
      function checkIfEquals(item, item1) {
        return (item.name === item1.name) && (item.ingredients === item1.ingredients) && (item.price === item1.price);
      }

      for (let i = 0; i < state.cart.length; i++) {
        if (checkIfEquals(state.cart[i], item)) {
          state.cart[i].quantity -= 1;
        }
      }
      state.cart = state.cart.filter(product => product.quantity >= 1);
    }


  },
  actions: {
    fetchMeals(context) {
      return getMeals()
        .then(response => {
          context.commit("setMeals", response.data);
        });
    }
  },
  getters: {
    getMeals(state) {
      return state.meals;
    },
    getCart(state) {
      return state.cart;
    }

  }
});
