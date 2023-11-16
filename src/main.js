import './styles/global.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import icons from './utils/fontAwesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add({...icons })

const app = createApp(App)

app.use(router)
app.component('fa', FontAwesomeIcon)
app.mount('#app')
