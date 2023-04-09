import { createRouter, createWebHistory } from 'vue-router';
//路由组件
import Main from '../views/Main';
import Home from '../views/Home';
import User from '../views/User';
import PageOne from '../views/PageOne';
import PageTwo from '../views/PageTwo';

//将路由与组件进行映射
const routes = [
    {
        path: "/",//路径
        name: 'Main',//组件名
        component: Main,//组件
        redirect: '/home',//重定向
        //子路由
        children: [
            {path: 'home',name: '',component: Home},//首页
            {path: 'user',name: '',component: User},//用户界面
            {path: 'pageOne',name: '',component: PageOne},//首页
            {path: 'pageTwo',name: '',component: PageTwo},//首页
        ]
    }
    
]
//创建router实例
const router = createRouter({
    history: createWebHistory(),
    routes
})
//对外暴露
export default router