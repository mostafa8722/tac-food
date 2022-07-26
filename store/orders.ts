import { ActionTree, MutationTree, GetterTree } from 'vuex'


import Vue from 'vue'

import Order from '~/data/interfaces/order'
import MyOrder from '~/data/interfaces/myOrder'
import MyOrderState from '~/data/interfaces/myOrderState'







export const state = () => ({

  orders:Array<Order>() ,
  myOrders : Array<MyOrder>() ,
  myOrdersState : Array<MyOrderState>() ,

  
})
export type AuthState = ReturnType<typeof state>

export const getters: GetterTree<AuthState, any> = {
  orders: (state: any) => state.orders,
  myOrders: (state: any) => state.myOrders,
  myOrdersState: (state: any) => state.myOrdersState,
 }

export const mutations: MutationTree<AuthState> = {
 
  
  setMyOrders(state:any, data:any) {state.myOrders = data},
  setMyOrdersState(state:any, data:any) {state.myOrdersState = data},
 
  

}

export const actions: ActionTree<AuthState, any> = {




  async payment({ commit, dispatch }, data) {


    
    await this.$repositories
      .payments()
      .addOrder(data)
      .then((res:any) => {
     

        console.log("Ttt",res.data)
     
        if(res.data.url && res.data.status==0){
          let url = res.data.url;
         
        
          location.href = url;
        }else if(res.data.status==0)
        this.$router.push("/myOrders")
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
        commit("setMyOrders",res.data.result)
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
        console.log("updateStoreCart12",res)
        commit("setMyOrdersState",res.data.result)
       // this.dispatch('carts/updateStoreCart',res.data.result,{ root:true });
        
      
      
      })
      .catch((error:any) => {
        this.dispatch("home/handleLoading",false)
     
      
      })
  },

  async sendReport({ commit, dispatch }, data) {
    let token  = {
      api_token: data.api_token,
      is_order : true
   };

    this.dispatch('home/addDataSent',true)
    await this.$repositories
      .users()
      .sendReport(data)
      .then((res:any) => {
        this.dispatch('home/addDataSent',false)
        console.log("updateStoreCart12",res)
      
    
  this.dispatch('orders/showMyOrders',token)      
  this.dispatch('orders/showOrdersState',token)     
       // this.dispatch('carts/updateStoreCart',res.data.result,{ root:true });
        
       Vue.$toast.success("گزارش ارسال شد")
      
      })
      .catch((error:any) => {
      
        this.dispatch('home/addDataSent',false)
     
      
      })
  },

  async sendComment({ commit, dispatch }, data) {
    let token  = {
      api_token: data.api_token,
      is_order : true
   };

    this.dispatch('home/addDataSent',true)
    await this.$repositories
      .users()
      .sendComment(data)
      .then((res:any) => {
        this.dispatch('home/addDataSent',false)
        console.log("updateStoreCart1233",res)
      
    
  this.dispatch('orders/showMyOrders',token)      
  this.dispatch('orders/showOrdersState',token)     
       // this.dispatch('carts/updateStoreCart',res.data.result,{ root:true });
        
       Vue.$toast.success("نظر با موفقیت ارسال شد")
      
      })
      .catch((error:any) => {
      
        this.dispatch('home/addDataSent',false)
     
      
      })
  },



}
