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
  {
    path: "/flip",
    redirect: "/flip/main-child",
    name: "flip",
    component: () => import("@/views/flip.vue"),
    children: [
      {
        path: "main-child",
        name: "main-child",
        component: () => import("@/components/flip/main-child.vue"),
      },
      {
        path: "flip-child",
        name: "flip-child",
        component: () => import("@/components/flip/flip-child.vue"),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
