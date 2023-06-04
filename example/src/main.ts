import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import bundlessComponents from '../../bundless/dist'
import '../../bundle/dist/style.css'
import bundleComponents from '../../bundle/dist'


const app = createApp(App)
app.use(bundlessComponents)
console.log(bundleComponents);

app.use(bundleComponents)
app.mount('#app')
