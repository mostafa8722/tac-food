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
     

       console.log("pppppp",res)
        if(res.data.url && res.data.status==0){
          let url = res.data.url;
        
          location.href = url;
        }
       // commit('productsPage',res.data)
      })
      .catch((error:any) => {
        console.log("paye====>",error);
      
      })
  },
  async updateOrder({ commit, dispatch }, data) {
      
    console.log("pay====>",data);
    await this.$repositories
      .payments()
      .updateStoreOrder(data)
      .then((res:any) => {
     
       // dispatch('carts/updateStoreCart',res.data.result,{ root:true })
        this.dispatch('carts/updateStoreCart',res.data.result,{ root:true })
        console.log("pay2====>",res.data.result);
        console.log("pay4====>",this.dispatch);
       // commit('productsPage',res.data)
      })
      .catch((error:any) => {
        
        Vue.$toast.error("خطا ! لطفا دوباره  یا بعدا تلاش کنید")
      
      })
  },



}
