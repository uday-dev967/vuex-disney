import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import VideoPage from "../views/VideoPage.vue";
// import RegisterView from "../views/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  // {
  //   path: "/register",
  //   name: "register",
  //   component: RegisterView,
  // },
  {
    path: "/home",
    name: "home",
    component: HomeView,
    // meta: { requiresAuth: true },
  },
  {
    path: "/video/:id",
    name: "video-show",
    component: VideoPage,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
// let authToken = localStorage.getItem("authToken");
// router.beforeEach((to, from, next) => {
//   authToken = localStorage.getItem("authToken");
//   console.log(authToken, "auth");
//   const isAuthenticated = authToken !== null;
//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

//   if (requiresAuth && !isAuthenticated) {
//     // Redirect to the login page or wherever appropriate
//     next("/");
//   } else {
//     next();
//   }
// });

// if (authToken !== null) {
//   router.push({ name: "home" });
// }

export default router;
