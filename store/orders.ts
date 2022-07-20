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
    console.log("pppppp22",data)

    
    await this.$repositories
      .payments()
      .addOrder(data)
      .then((res:any) => {
     

       console.log("pppppp",res)
        if(res.data.url && res.data.status==0){
          let url = res.data.url;
         
        
          location.href = url;
        }
        else
        Vue.$toast.error(res.data.message)
       // commit('productsPage',res.data)
      })
      .catch((error:any) => {
        console.log("paye====>",error);
      
      })
  },
  async updateOrder({ commit, dispatch }, data) {
      
    this.dispatch("home/addDataSent",true);
    await this.$repositories
      .payments()
      .updateStoreOrder(data)
      .then((res:any) => {
       
       
        this.dispatch('carts/updateStoreCart',res.data.result,{ root:true });
        
        if(data.show_payemnt)
        this.$router.push("/payment")
      
      })
      .catch((error:any) => {
        this.dispatch("home/addDataSent",false);
     
      
      })
  },



}
