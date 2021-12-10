import Vue from 'vue'
import VueRouter from "vue-router";

//1.安装插件
Vue.use(VueRouter)

const Log = () => import("@/views/login/Log")
const Home = () => import("@/views/home/Home")

const routes = [
    {
        path: '/log',
        component: Log,
        meta: {title: '登录'}
    },
		{
		    path: '/',
		    component: Home,
		    meta: {title: '公告'}
		}
]

// 2.创建router
const  router = new VueRouter({
    routes,
    // mode: 'history'
})
router.beforeEach((to, from, next) => {
	console.log(to)
	console.log(from)
  document.title = to.meta.title
  next()
})

export default router