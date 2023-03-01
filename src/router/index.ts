import { createRouter, createWebHistory } from 'vue-router'

export const asyncRoutes = [
   {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: () => import('@/views/Home/index.vue'), // 路由懒加载
      meta: { // 路由源信息
        isShowNav: true 
      }
    },
    {
      path: '/Category',
      name: 'Category',
      component: () => import('@/views/Category/index.vue'),  
      meta: {  
        isShowNav: true 
      }
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: () => import('@/views/Cart/index.vue'),  
      meta: { 
        isShowNav: true 
      }
    },
    {
      path: '/User',
      name: 'User',
      component: () => import('@/views/User/index.vue'),  
      meta: {  
        isShowNav: true 
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('@/views/Login/index.vue'),  
      meta: {  
        isShowNav: false 
      }
    },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...asyncRoutes,
    {path: '/:pathMatch(.*)', redirect: '/'}

  ]
})

// 前置导航守卫
router.beforeEach((to, from, next) => {
  next()
})

export default router
