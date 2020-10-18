import { createRouter, createWebHistory } from 'vue-router'
import Heros from './pages/Heros'
import Calendar from "@/pages/Calendar"
import Home from "@/pages/Home"

const routes = [
    {path:'/', component: Home},
    {path:'/heros', component: Heros},
    {path: '/calendar', component: Calendar}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;