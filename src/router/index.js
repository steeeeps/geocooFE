import Vue from 'vue'
import VueRouter from 'vue-router'
import Tools from '../pages/Tools.vue'
import Home from '../pages/Home.vue'
import Earthview from "../pages/Earthview.vue"

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
    path: '/earthviews',
    component: Earthview
}
]
const router = new VueRouter({
    routes,
    mode: 'history'
})
export default router