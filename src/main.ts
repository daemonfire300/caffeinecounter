import { createApp } from 'vue'
import App from './App.vue'
import { BeverageStore } from './service/store'
import { Store, createStore } from 'vuex'
import { Consumption } from './model/beverage'


declare module '@vue/runtime-core' {
    // declare your own store states
    interface State {
        beverageData: Array<Consumption>
    }

    // provide typings for `this.$store`
    interface ComponentCustomProperties {
        $store: Store<State>
    }
}

const app = createApp(App)
const beverageStore = new BeverageStore(localStorage)
const store = createStore({
    state() {
        return {
            beverageData: beverageStore.loadStore()
        }
    },
    mutations: {
        add(state: any, payload: Consumption) {
            beverageStore.store(payload.amount, payload.beverage, payload.date)
            state.beverageData = beverageStore.loadStore()
        }
    },
    actions: {
        add({ commit }, payload: Consumption) {
            commit('add', payload)
        }
    }
})
app.use(store)
app.mount('#app')
