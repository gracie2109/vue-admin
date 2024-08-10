import {createRouter, createWebHistory} from 'vue-router'
import {setupRouterGuards} from './guards'
import {basicRoutes} from './basic-routes'

export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH || '/'),
  routes: basicRoutes,
})


export async function setupRouter(app) {
  app.use(router)
  setupRouterGuards(router)
}

