//Vuex 组件与组件之间的共享数据
//安装：npm i vuex

import { createStore } from 'vuex'

import sidebar from './sidebar'
import tab from './tab'
const store = createStore({
    modules: {
        sidebar,
        tab
    }
})

export default store