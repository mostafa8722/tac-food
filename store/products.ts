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
  searchProducts:[] ,
  comments:[] ,
  payments:[] ,
  catgoriesStore:[] ,
  title:""

  
})
export type AuthState = ReturnType<typeof state>

export const getters: GetterTree<AuthState, any> = {
  products: (state: any) => state.products,
  searchProducts: (state: any) => state.searchProducts,
  comments:  (state: any) => state.comments,
  payments:  (state: any) => state.payments,
  title: (state: any) => state.title,
  catgoriesStore: (state: any) => state.catgoriesStore,
 

}

export const mutations: MutationTree<AuthState> = {
 
  
  clearSearch(state:any){
    state.products  = [];
  },
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
  searchProductsPage(state:any, data:result) {
    state.searchProducts = data.result

  
  },
  commentsPage(state:any, data:result) {state.comments = data.result},
  paymentsPage(state:any, data:result) {state.payments = data.result},
  setTitle(state:any, data:string) {state.title = data},
 
  

}

export const actions: ActionTree<AuthState, any> = {




  async productsPage({ commit, dispatch }, data) {
      
    this.dispatch("home/handleLoading",true)
    await this.$repositories
      .products()
      .productsPage(data)
      .then((res:any) => {

     
       
        commit('productsPage',res.data)

        let products = res.data.result;
        if(products.length>0)
        this.dispatch('products/setTitle',products[0].store_name)



        setTimeout(()=>{
          
          this.dispatch("home/handleLoading",false)
        },500)
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

       
        this.dispatch("home/handleLoading",false)
        this.dispatch("home/addDataSent",false)

     
        if(data.category=='product')
        commit('searchProductsPage',res.data)
        else
        this.dispatch("categories/searchShopsPage",res.data)
        
      })
      .catch((error:any) => {
        this.dispatch("home/handleLoading",false)
        this.dispatch("home/addDataSent",false)
       
      
      })
  },
  
  

  async commentSection({ commit, dispatch }, data) {
      
    if(data.loading && data.loading =="not")
    this.dispatch("home/handleLoading",false)
    else
    this.dispatch("home/handleLoading",true) 

    await this.$repositories
      .comments()
      .commentsPage(data)
      .then((res:any) => {
        //this.dispatch("home/handleLoading",false)
        commit('commentsPage',res.data)
      })
      .catch((error:any) => {
        this.dispatch("home/handleLoading",false)
        //Vue.$toast.error("خطا ! لطفا دوباره  یا بعدا تلاش کنید")
      
      })
  },
  async likeCommentSection({ commit, dispatch }, data) {
      

    await this.$repositories
      .comments()
      .likeComment(data)

      .then((res:any) => {
       
        this.dispatch("products/commentSection",{store_id:data.store_id,api_token:data.api_token,loading:"not"})
    
      })
      .catch((error:any) => {
        this.dispatch("home/handleLoading",false); 
      
      
      })
  },
  async customerCommentSection({ commit, dispatch }, data) {
    commit('commentsPage',{result:[]});
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
   
    await this.$repositories
      .payments()
      .customerPaymentsPage(data)
      .then((res:any) => {
     
        commit('paymentsPage',res.data)
       
      })
      .catch((error:any) => {
      
       // Vue.$toast.error("خطا ! لطفا دوباره  یا بعدا تلاش کنید")
      })
  },
  setTitle({ commit, dispatch }, data) {

    commit('setTitle',data)
  },
  clearSearch({ commit, dispatch }, data) {
    commit('clearSearch',data);
    this.dispatch("categories/addShops",{result:[]})
  },



}
