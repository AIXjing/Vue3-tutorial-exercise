import { createRouter, createWebHistory } from 'vue-router'
import Heros from './pages/Heros'
import Calendar from "@/pages/Calendar"
import Home from "@/pages/Home"
import Markdown from "@/pages/Markdown"
import Slider from "@/pages/Slider"
import Calculator from "@/pages/Calculator"

const routes = [
    {path:'/', component: Home},
    {path:'/heros', component: Heros},
    {path: '/calendar', component: Calendar},
    {path: '/markdown', component: Markdown},
    {path: '/slider', component: Slider},
    {path: '/calculator', component: Calculator}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;