import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import ProfileEdit from "../views/ProfileEdit.vue";
import Detail from '../views/Detail.vue'
import store from "../store/index";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/profileedit",
    name: "profileEdit",
    component: ProfileEdit,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail,
    props: true
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
      path: '/',
      query: {
        redirect: to.fullPath
      }
    });
  } else {
    next();
  }
});


export default router;