import {createRouter, createWebHistory} from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Artwork from "../views/Artwork.vue";
import DefaultLayout from "../components/DefaultLayout.vue";

const routes = [
  {
    path: '/dashboard',
    redirect: '/dashboard',
    component: DefaultLayout,
    children: [
      {path: '/dashboard', name: 'Dashboard', component: Dashboard}
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/artwork',
    name: 'artwork',
    component: Artwork
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router;
