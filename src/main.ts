import { createApp, State } from 'vue'
import App from './App.vue'
import { BeverageStore } from './service/store'
import { Store, createStore } from 'vuex'
import { Consumption } from './model/beverage'
import 'bootstrap/dist/css/bootstrap.min.css'


declare module '@vue/runtime-core' {
    // declare your own store states
    interface State {
        beverageData: Array<Consumption>,
        totalFluids: number,
        totalCaffeine: number,
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
            beverageData: beverageStore.loadStore(),
        }
    },
    getters: {
        totalFluids(state: State): number {
            return state.beverageData.reduce<number>((prev, curr): number => {
                return prev + curr.amount;
            }, 0)
        },
        totalCaffeine(state: State): number {
            return state.beverageData.reduce<number>((prev, curr): number => {
                return prev + curr.beverage.caffeine;
            }, 0)
        }
    },
    mutations: {
        add(state: any, payload: Consumption) {
            beverageStore.store(payload.amount, payload.beverage, payload.date)
            const data = beverageStore.loadStore()
            state.beverageData = data
            state.totalFluids = data.reduce<number>((prev, curr): number => {
                return prev + curr.amount;
            }, 0)
            state.totalCaffeine = data.reduce<number>((prev, curr): number => {
                return prev + curr.beverage.caffeine;
            }, 0)
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
