import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Forms from "../views/Forms.vue";
import Tables from "../views/Tables.vue";
import UIElements from "../views/UIElements.vue";
import LoginModule from "../views/LoginModule.vue";
import Modal from "../views/Modal.vue";
import Chart from "../views/ChartView.vue";
import Card from "../views/CardView.vue";
import Blank from "../views/BlankView.vue";
import NotFound from "../views/NotFound.vue";
import { useAuthStore } from "@/store/auth";
import { storeToRefs } from "pinia";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: LoginModule,
    meta: { layout: "empty" },
  },
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/forms",
    name: "Forms",
    component: Forms,
  },
  {
    path: "/cards",
    name: "Cards",
    component: Card,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/ui-elements",
    name: "UIElements",
    component: UIElements,
  },
  {
    path: "/modal",
    name: "Modal",
    component: Modal,
  },
  {
    path: "/charts",
    name: "Chart",
    component: Chart,
  },
  {
    path: "/blank",
    name: "Blank",
    component: Blank,
  },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  // ✅ This will work make sure the correct store is used for the
  // current running app
const {isAuthenticated, phone} = storeToRefs(useAuthStore());
  console.log('data', isAuthenticated, phone);

})

export default router;
