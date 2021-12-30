// store.ts
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// 为 store state 声明类型
export interface State {
  count: number
  user: String
}

// 定义 injection key
// eslint-disable-next-line symbol-description
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    user: '状态1',
    count: 0
  },
  getters: {
    getCount(state, getters, rootState) {
      return `${state.count}`
    }
  },
  mutations: {
    increment(state) {
      state.count += 1
    }
  },
  actions: {},
  modules: {}
})
