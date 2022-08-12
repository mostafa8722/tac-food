import { ActionTree, MutationTree, GetterTree } from 'vuex'
import Store from '~/data/models/store'
interface result {
  result: Store,
  status:number

}

export const state = () => ({
  shops:[] ,
  
})
export type AuthState = ReturnType<typeof state>

export const getters: GetterTree<AuthState, any> = {
  shops: (state: any) => state.shops,

}

export const mutations: MutationTree<AuthState> = {
 
  categoriesPage(state:any, data:result) {state.shops = data.result},

}

export const actions: ActionTree<AuthState, any> = {




  async categoriesPage({ commit, dispatch }, data) {
      
      this.dispatch("home/handleLoading",true)
    await this.$repositories
      .categories()
      .categoriesPage(data)
      .then((res:any) => {
     
        setTimeout(()=>{this.dispatch("home/handleLoading",false)},500)
        commit('categoriesPage',res.data)
      })
      .catch((error:any) => {
        this.dispatch("home/handleLoading",false)
       // dispatch('toast/showErrorToast', error, { root: true })
      })
  },

  async addShops({ commit, dispatch }, data) {
    commit('categoriesPage',data)
},
}
