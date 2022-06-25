import { ActionTree, MutationTree, GetterTree } from 'vuex'
import Product from '~/data/models/product'
import Vue from 'vue'
interface result  {
  result: Product[],
  delivery:number,
  status:number,

}

export const state = () => ({
  products:[] ,
  comments:[] ,
  carts:[] ,
  
})
export type AuthState = ReturnType<typeof state>

export const getters: GetterTree<AuthState, any> = {
  products: (state: any) => state.products,
  comments: (state: any) => state.comments,
  carts: (state: any) => state.carts,

}

export const mutations: MutationTree<AuthState> = {
 
  
  productsPage(state:any, data:result) {state.products = data.result},
  commentsPage(state:any, data:result) {state.comments = data.result},
  clearCart(state:any, data:any) {state.carts = []},
  addCart(state:any, data:any) {state.carts.push(data)},

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
       
      
        Vue.$toast.error("خطا ! لطفا دوباره  یا بعدا تلاش کنید")
      })
  },

  async addCart({ commit, dispatch }, data) {
    commit('addCart',data)
    Vue.$toast.success("به سبد خرید افزوده شد")
   
  },
}
