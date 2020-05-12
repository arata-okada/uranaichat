import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DivinersLists from "../views/DivinersLists.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/divinerslists",
    name: "DivinersLists",
    component: DivinersLists,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !store.state.auth) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    });
  } else {
    next();
  }
});

export default router;