import { ActionTree, MutationTree, GetterTree } from 'vuex'


import Vue from 'vue'
import Cart from '~/data/interfaces/cart'
import Product from '~/data/models/product'

interface result  {
  result: Product[],
  delivery:number,
  status:number,

}





export const state = () => ({
  products:[] ,
  comments:[] ,
  carts:Array<Cart>() ,

  totalCart: 0,
  
})
export type AuthState = ReturnType<typeof state>

export const getters: GetterTree<AuthState, any> = {
  products: (state: any) => state.products,
  comments: (state: any) => state.comments,
  carts: (state: any) => state.carts,
  totalCart: (state: any) => state.totalCart,

}

export const mutations: MutationTree<AuthState> = {
 
  
  productsPage(state:any, data:result) {state.products = data.result},
  commentsPage(state:any, data:result) {state.comments = data.result},
  clearCart(state:any, data:any) {state.carts = []},
  addCart(state:any, data:any) {
    state.totalCart = state.totalCart + data.price;
    
 let isInCart =
 state.carts.find((item:any)=> item.store_name==data.store_name);

 console.log("ggg",isInCart)
 if(!isInCart){
  console.log("ddd");
  data.count = 1;
  let data_cart:Cart={store_id:0,store_name:"",products:[]} ;
  data_cart.store_id = data.store_id;
  data_cart.store_name= data.store_name;
  data_cart.products.push(data);
  console.log("ddd",data_cart);
  state.carts.push(data_cart);
  console.log("ddd");
 }else{

  let index = state.carts.findIndex((item:any) => item.store_name==data.store_name);
  let isProductStore = state.carts[index].products.find((item:any)=> item.id==data.id);
   if(!isProductStore){
    data.count = 1;
  state.carts[index].products.push(data);
 
  console.log("ddd2");
   }else{
    let index2 = state.carts[index].products.findIndex((item:any) => item.id==data.id);

  data.count = state.carts[index].products[index2].count + 1;
  state.carts[index].products.splice(index2,1,data);
   }
 }

    

 
   // push(data)
  },
  removeCart(state:any, data:Product) {
    state.totalCart = state.totalCart - data.price;
  
    let index = state.carts.findIndex((item:any) => item.store_name==data.store_name);
    let index2 = state.carts[index].products.findIndex((item:any) => item.id==data.id);
    if(state.carts[index].products[index2].count>1){
      data.count = state.carts[index].products[index2].count - 1;
       state.carts[index].products.splice(index2,1,data);
    }else {
         state.carts[index].products.splice(index2,1);
    }
    
   
  },

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
    //Vue.$toast.success("به سبد خرید افزوده شد")
   
  },
  async removeCart({ commit, dispatch }, data) {
    commit('removeCart',data)
   // Vue.$toast.error("به سبد خرید افزوده شد")
   
  },
}
