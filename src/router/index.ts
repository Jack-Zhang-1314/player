import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main.vue"),
  },
  {
    path: "/player",
    name: "player",
    component: () => import("@/views/player.vue"),
  },
  {
    path: "/drag",
    name: "drag",
    component: () => import("@/views/drag.vue"),
  },
  {
    path: "/rcMenu",
    name: "rcMenu",
    component: () => import("@/views/rcMenu.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
