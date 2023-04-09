import { createApp } from 'vue'
import { ElConfigProvider} from 'element-plus';
import router from './router'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from './store'


const app = createApp(App)
app.use(ElConfigProvider)
app.use(router)
app.use(store)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }


app.mount('#app')
