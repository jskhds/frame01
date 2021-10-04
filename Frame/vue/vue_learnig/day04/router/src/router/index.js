import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Video from "../views/Video.vue"
import Login from "../views/Login.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/blog',
    name:"Blog",
    component:Blog,
  },
  {
    path:"/video",
    name:"Video",
    component:Video
  },
  {
    path:"/login",
    name:"Login",
    component:Login
  }
   
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 导航首位：如果登录了才能进首页 没有登录就只能在登录界面
router.beforeEach((to,from,next)=>{
  if(to.path !== "/login"){
    if(localStorage.getItem("usr")){
      next();
    }else{
      next("/login")
    }
  }
  else{
    next();
  }
})

export default router
