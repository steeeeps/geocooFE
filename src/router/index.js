import Vue from 'vue'
import VueRouter from 'vue-router'
import Tools from '../pages/Tools.vue'
import Home from '../pages/Home.vue'
import Wallpapers from "../pages/Wallpapers.vue"

Vue.use(VueRouter)

const routes = [{
    path: '/tools',
    component: Tools
},
{
    path: '/',
    component: Home
},
{
    path: '/wallpapers',
    component: Wallpapers
}
]
const router = new VueRouter({
    routes,
    mode: 'history'
})
export default router