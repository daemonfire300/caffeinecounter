import { createApp, State } from 'vue'
import App from './App.vue'
import { BeverageStore } from './service/store'
import { Store, createStore } from 'vuex'
import { Consumption } from './model/beverage'
import router from './router/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as bootstrap from 'bootstrap';
//import './assets/sidebar.css'
import './assets/list-groups.css'
import { reactiveStoreWithStorage } from './store/store'



const app = createApp(App)
const beverageStore = new BeverageStore(localStorage)
const reactiveStore = reactiveStoreWithStorage(beverageStore)

app.use(reactiveStore)
app.use(router)
app.mount('#app')
