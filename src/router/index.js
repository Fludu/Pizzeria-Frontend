import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Meals from "../views/Meals";
import Order from "../views/Order";
import Cart from "../components/Cart";


Vue.use(VueRouter);


const routes = [
  {
    path:'/',
    name:'Home',
    component: Home

  },
  {
    path:'/meals',
    name:'Meals',
    component: Meals
  },
  {
    path:'/order',
    name:'Order',
    component: Order
  },
  {
    path:'/cart',
    name:'Cart',
    component: Cart
  }

];

const router = new VueRouter({
  routes,
});

export default router;
