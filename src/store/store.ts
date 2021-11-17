import { Consumption } from '@/model/beverage';
import { BeverageStore } from '@/service/store';
import { createStore, Store } from 'vuex'
import { State } from 'vue'

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    beverageData: Array<Consumption>,
    dailyBeverageData: Array<Consumption>,
    totalFluids: number,
    totalCaffeine: number,
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

function computeTotalFluids(consumption: Array<Consumption>): number {
  return consumption.reduce<number>((prev, curr): number => {
    return prev + curr.amount;
  }, 0)
}

function computeTotalCaffeine(consumption: Array<Consumption>): number {
  return consumption.reduce<number>((prev, curr): number => {
    return prev + curr.beverage.caffeine;
  }, 0)
}

const reactiveStoreWithStorage = (beverageStore: BeverageStore): Store<State> => {
  return createStore({
    state() {
      return {
        beverageData: beverageStore.loadStore(),
        dailyBeverageData: new Array<Consumption>(),
      }
    },
    getters: {
      totalFluids(state: State): number {
        return computeTotalFluids(state.beverageData)
      },
      totalCaffeine(state: State): number {
        return computeTotalCaffeine(state.beverageData)
      },
      dailyTotalFluids(state: State): number {
        return computeTotalFluids(state.dailyBeverageData)
      },
      dailyTotalCaffeine(state: State): number {
        return computeTotalCaffeine(state.dailyBeverageData)
      },
    },
    mutations: {
      add(state: any, payload: Consumption) {
        beverageStore.store(payload.amount, payload.beverage, payload.date)
        const data = beverageStore.loadStore()
        state.beverageData = data
      },
      remove(state: any, payload: String) {
        beverageStore.removeItem(payload)
        const data = beverageStore.loadStore()
        state.beverageData = data
      },
      setDaily(state: any, payload: Date) {
        const data = beverageStore.loadConsumptionsOfDay(payload)
        state.beverageData = data
      },
    },
    actions: {
      add({ commit }, payload: Consumption) {
        commit('add', payload)
      },
      remove({ commit }, payload: String) {
        commit('remove', payload)
      },
      loadDaily({ commit }, payload: Date) {
        commit('setDaily', payload)
      },
    }
  })
}

export { reactiveStoreWithStorage }