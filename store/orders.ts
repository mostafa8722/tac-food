import { ActionTree, MutationTree, GetterTree } from 'vuex'


import Vue from 'vue'

import Order from '~/data/interfaces/order'







export const state = () => ({

  orders:Array<Order>() ,

  
})
export type AuthState = ReturnType<typeof state>

export const getters: GetterTree<AuthState, any> = {
  orders: (state: any) => state.orders,
 }

export const mutations: MutationTree<AuthState> = {
 
  
 // commentsPage(state:any, data:result) {state.comments = data.result},
 
  

}

export const actions: ActionTree<AuthState, any> = {




  async payment({ commit, dispatch }, data) {
      
    
    await this.$repositories
      .payments()
      .addOrder(data)
      .then((res:any) => {
     

        console.log("pay====>",res);
       // commit('productsPage',res.data)
      })
      .catch((error:any) => {
       
        Vue.$toast.error("خطا ! لطفا دوباره  یا بعدا تلاش کنید")
      
      })
  },
  async updateOrder({ commit, dispatch }, data) {
      
    
    await this.$repositories
      .payments()
      .updateStoreOrder(data)
      .then((res:any) => {
     

        console.log("pay====>",res);
       // commit('productsPage',res.data)
      })
      .catch((error:any) => {
       
        Vue.$toast.error("خطا ! لطفا دوباره  یا بعدا تلاش کنید")
      
      })
  },



}
