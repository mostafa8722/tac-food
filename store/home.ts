import { ActionTree, MutationTree, GetterTree } from 'vuex'
import Home from '~/data/models/home'
interface resultHome  {
  result: Home,
  status:number

}

export const state = () => ({
  categories:[] ,
  sliders:[] ,
  populars:[] ,
  discunts:[] ,

  status: '',
  isLoggedIn: false,
})
export type AuthState = ReturnType<typeof state>

export const getters: GetterTree<AuthState, any> = {
  categories: (state: any) => state.categories,
  sliders: (state: any) => state.sliders,
  populars: (state: any) => state.populars,
  discunts: (state: any) => state.discunts,
}

export const mutations: MutationTree<AuthState> = {
 
  homePage(state:any, data:resultHome) {

    state.categories = data.result.types
    state.sliders = data.result.advertises
    state.populars = data.result.most_popular
    state.discunts = data.result.discounts
   
  },
}

export const actions: ActionTree<AuthState, any> = {




  async homePage({ commit, dispatch }, data) {
  
    
   
   
    await this.$repositories
      .home()
      .HomeCustomer(data)
      .then((res:any) => {
       
        commit('homePage',res.data)
      })
      .catch((error:any) => {
      
       // dispatch('toast/showErrorToast', error, { root: true })
      })
  },
}
