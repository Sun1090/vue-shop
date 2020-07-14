import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../components/Login.vue'
const Login = () => import('../components/Login')

// import Home from '../components/Home.vue'
const Home = () => import('../components/')

// import Welcome from '../components/Welcome.vue'
const Welcome = () => import('../components/')

// import Users from '../components/user/Users.vue'
const Users = () => import('../components/')

// import Rights from '../components/power/Rights.vue'
const Rights = () => import('../components/')

// import Roles from '../components/power/Roles.vue'
const Roles = () => import('../components/')

// import Cate from '../components/goods/Cate.vue'
const Cate = () => import('../components/')

// import Params from '../components/goods/Params.vue'
const Params = () => import('../components/')

// import List from '../components/goods/List.vue'
const List = () => import('../components/')

// import Add from '../components/goods/Add.vue'
const Add = () => import('../components/')

// import Order from '../components/order/Order.vue'
const Order = () => import('../components/')

// import Report from '../components/report/Report.vue'
const Report = () => import('../components/')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome,
      },
      {
        path: '/users',
        component: Users,
      },
      {
        path: '/rights',
        component: Rights,
      },
      {
        path: '/roles',
        component: Roles,
      },
      {
        path: '/categories',
        component: Cate,
      },
      {
        path: '/params',
        component: Params,
      },
      {
        path: '/goods',
        component: List,
      },
      {
        path: '/goods/add',
        component: Add,
      },
      {
        path: '/orders',
        component: Order,
      },
      {
        path: '/reports',
        component: Report,
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

//拦截路由导航守卫
router.beforeEach((to, from, next) => {
  //to:将要访问的路径
  //from : 代表从哪个路径转而来
  // next : 是一个函数 表示放行
  // next() 放行  next('/login')  强制跳转
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
