import { createApp } from 'vue'
import './assets/scss/app.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'

library.add(faStar)
createApp(App).mount('#app')
