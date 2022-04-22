import {createWebHistory, createRouter } from 'vue-router'
import Home from '../components/Home'
import AddItem from '../components/AddItem'
import EditItem from '@/components/EditItem'
import ShowItem from '../components/ShowItem'

const routes = [
    {
        path: '/additem',
        name: 'AddItem',
        component: AddItem,
    },

    {
        path: '/',
        name: 'home',
        component: Home,
        
    },
 
    {
        path: '/edititem/:itemId',
        name: 'EditItem',
        component: EditItem
    },
    {
        path: '/showitem/:id',
        name: 'ShowItem',
        component: ShowItem
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),routes
})

export default router