import { createRouter, createWebHistory } from "vue-router";
import GameModeView from "../views/GameModeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "GameModeView",
      component: GameModeView,
    },
    {
      path: '/playerselect',
      name: 'PlayerSelect',
      component: () => import('../views/PlayerSelectView.vue')
    },
    {
      path: '/playerxplayer',
      name: 'PlayerXPlayer',
      component: () => import('../views/PlayerXPlayerView.vue')
    },
    {
      path: '/playerone',
      name: 'PlayerOne',
      component: () => import('../views/PlayerOneView.vue')
    },
  ],
});

export default router;
