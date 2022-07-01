import { ActionTree, MutationTree, GetterTree } from 'vuex'


import Vue from 'vue'
import Product from '~/data/models/product'

interface result  {
  result: Product[],
  delivery:number,
  status:number,

}





export const state = () => ({
  products:[] ,
  comments:[] ,

  
})
export type AuthState = ReturnType<typeof state>

export const getters: GetterTree<AuthState, any> = {
  products: (state: any) => state.products,
  comments: (state: any) => state.comments,
 

}

export const mutations: MutationTree<AuthState> = {
 
  
  productsPage(state:any, data:result) {state.products = data.result},
  commentsPage(state:any, data:result) {state.comments = data.result},
 
  

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
       
        Vue.$toast.error("خطا ! لطفا دوباره  یا بعدا تلاش کنید")
      
      })
  },

  async commentSection({ commit, dispatch }, data) {
      
    
    await this.$repositories
      .comments()
      .commentsPage(data)
      .then((res:any) => {
     
        commit('commentsPage',res.data)
      })
      .catch((error:any) => {
       
        Vue.$toast.error("خطا ! لطفا دوباره  یا بعدا تلاش کنید")
      
      })
  },
  async customerCommentSection({ commit, dispatch }, data) {
    await this.$repositories
      .comments()
      .customerCommentsPage(data)
      .then((res:any) => {
     
        commit('commentsPage',res.data)
      })
      .catch((error:any) => {
       
      
        Vue.$toast.error("خطا ! لطفا دوباره  یا بعدا تلاش کنید")
      })
  },
  async customerPaymentSection({ commit, dispatch }, data) {
    alert()
    await this.$repositories
      .payments()
      .customerPaymentsPage(data)
      .then((res:any) => {
     
        console.log("ttttt",res.data)
       // commit('commentsPage',res.data)
      })
      .catch((error:any) => {
       
      ca
        Vue.$toast.error("خطا ! لطفا دوباره  یا بعدا تلاش کنید")
      })
  },


}
