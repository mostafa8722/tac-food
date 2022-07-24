import { ActionTree, MutationTree, GetterTree } from 'vuex'


import Vue from 'vue'

import Order from '~/data/interfaces/order'







export const state = () => ({

  orders:Array<Order>() ,
  myOrders : [],

  
})
export type AuthState = ReturnType<typeof state>

export const getters: GetterTree<AuthState, any> = {
  orders: (state: any) => state.orders,
  myOrders: (state: any) => state.myOrders,
 }

export const mutations: MutationTree<AuthState> = {
 
  
  setMyOrders(state:any, data:any) {state.myOrders = data},
 
  

}

export const actions: ActionTree<AuthState, any> = {




  async payment({ commit, dispatch }, data) {


    
    await this.$repositories
      .payments()
      .addOrder(data)
      .then((res:any) => {
     

     
        if(res.data.url && res.data.status==0){
          let url = res.data.url;
         
        
          location.href = url;
        }
        else
        Vue.$toast.error(res.data.message)
       // commit('productsPage',res.data)
      })
      .catch((error:any) => {
        
      
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

  async showMyOrders({ commit, dispatch }, data) {
      
    this.dispatch("home/handleLoading",true)
    await this.$repositories
      .users()
      .showMyOrders(data)
      .then((res:any) => {
        this.dispatch("home/handleLoading",false)
        commit("setMyOrders",res.data)
        console.log("updateStoreCart11",res.data)
       // this.dispatch('carts/updateStoreCart',res.data.result,{ root:true });
        
      
      
      })
      .catch((error:any) => {
        this.dispatch("home/handleLoading",false)
     
      
      })
  },
  async showOrdersState({ commit, dispatch }, data) {
      
    this.dispatch("home/handleLoading",true)
    await this.$repositories
      .users()
      .showOrdersState(data)
      .then((res:any) => {
        this.dispatch("home/handleLoading",false)
        console.log("updateStoreCart11",res)
       // this.dispatch('carts/updateStoreCart',res.data.result,{ root:true });
        
      
      
      })
      .catch((error:any) => {
        this.dispatch("home/handleLoading",false)
     
      
      })
  },




}
