import Home from '@/views/home/index.vue';
export const basicRoutes = [
  {
    name: 'Home',
    path: '',
    component: Home,
    meta: {
      title: 'Dashboard'
    },
  },
  {
    name: 'Pets',
    path: '/pets',
    component: () =>import('@/views/pets/ListPets.vue'),
    meta: {
      title: 'Pets list'
    },
  },
  {
    name: 'PetsCreate',
    path: '/pets/create',
    component: () =>import('@/views/pets/PetsCreate.vue'),
    meta: {
      title: 'Pets Create'
    },
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    meta: {
      title: '页面飞走了',
      layout: 'empty',
    },
  },

  {
    name: '403',
    path: '/403',
    component: () => import('@/views/error-page/403.vue'),
    meta: {
      title: '没有权限',
      layout: 'empty',
    },
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录页',
      layout: 'empty',
    },
  },
]
