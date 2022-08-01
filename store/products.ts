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
  catgoriesStore:[] ,

  
})
export type AuthState = ReturnType<typeof state>

export const getters: GetterTree<AuthState, any> = {
  products: (state: any) => state.products,
  comments: (state: any) => state.comments,
  catgoriesStore: (state: any) => state.catgoriesStore,
 

}

export const mutations: MutationTree<AuthState> = {
 
  
  productsPage(state:any, data:result) {
    state.products = data.result

    let cats:any = [];
      data.result .map((item:any,index:number)=>{
       let isIndex= cats.find((cat:any,index:number) => cat.name == item.category) 
       if(!isIndex)
      cats.push({id:index+1 , name :item.category   })
    })
    state.catgoriesStore = cats ;
  },
  commentsPage(state:any, data:result) {state.comments = data.result},
 
  

}

export const actions: ActionTree<AuthState, any> = {




  async productsPage({ commit, dispatch }, data) {
      
    this.dispatch("home/handleLoading",true)
    await this.$repositories
      .products()
      .productsPage(data)
      .then((res:any) => {

        console.log("tttt",res.data)
        this.dispatch("home/handleLoading",false)
        commit('productsPage',res.data)
      })
      .catch((error:any) => {
        this.dispatch("home/handleLoading",false)
       // Vue.$toast.error("خطا ! لطفا دوباره  یا بعدا تلاش کنید")
      
      })
  },

  async searchPage({ commit, dispatch }, data) {
      
    this.dispatch("home/handleLoading",true)
    this.dispatch("home/addDataSent",true)
    await this.$repositories
      .products()
      .searchPage(data)
      .then((res:any) => {

        console.log("tttt",res.data)
        this.dispatch("home/handleLoading",false)
        this.dispatch("home/addDataSent",false)
        commit('productsPage',res.data)
      })
      .catch((error:any) => {
        this.dispatch("home/handleLoading",false)
        this.dispatch("home/addDataSent",false)
       
      
      })
  },
  
  

  async commentSection({ commit, dispatch }, data) {
      
    this.dispatch("home/handleLoading",true)
    await this.$repositories
      .comments()
      .commentsPage(data)
      .then((res:any) => {
        this.dispatch("home/handleLoading",false)
        commit('commentsPage',res.data)
      })
      .catch((error:any) => {
        this.dispatch("home/handleLoading",false)
        //Vue.$toast.error("خطا ! لطفا دوباره  یا بعدا تلاش کنید")
      
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
       
      
       // Vue.$toast.error("خطا ! لطفا دوباره  یا بعدا تلاش کنید")
      })
  },
  async customerPaymentSection({ commit, dispatch }, data) {
    alert()
    await this.$repositories
      .payments()
      .customerPaymentsPage(data)
      .then((res:any) => {
     
        console.log("tttttrrr",res.data)
       // commit('commentsPage',res.data)
      })
      .catch((error:any) => {
      
       // Vue.$toast.error("خطا ! لطفا دوباره  یا بعدا تلاش کنید")
      })
  },


}
