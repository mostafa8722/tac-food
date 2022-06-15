import { ActionTree, MutationTree, GetterTree } from 'vuex'
import Product from '~/data/models/product'
interface result  {
  result: Product[],
  delivery:number,
  status:number,

}

export const state = () => ({
  products:[] ,
  
})
export type AuthState = ReturnType<typeof state>

export const getters: GetterTree<AuthState, any> = {
  products: (state: any) => state.products,

}

export const mutations: MutationTree<AuthState> = {
 
  
  productsPage(state:any, data:result) {state.products = data.result},

}

export const actions: ActionTree<AuthState, any> = {




  async productsPage({ commit, dispatch }, data) {
      
    
    await this.$repositories
      .products()
      .productsPage(data)
      .then((res:any) => {
     
        commit('productsPage',res.data)
      })
      .catch((error:any) => {
       
      
       // dispatch('toast/showErrorToast', error, { root: true })
      })
  },
}
