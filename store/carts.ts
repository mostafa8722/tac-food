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

  carts:Array<Cart>() ,

  totalCart: 0,
  addressCart: "",
  descriptionCart: "",
  
})
export type AuthState = ReturnType<typeof state>

export const getters: GetterTree<AuthState, any> = {
 
  carts: (state: any) => state.carts,
  totalCart: (state: any) => state.totalCart,
  addressCart: (state: any) => state.addressCart,
  descriptionCart: (state: any) => state.descriptionCart,

}

export const mutations: MutationTree<AuthState> = {
 
  
 
  clearCart(state:any, data:any) {
   
    state.carts = [];
    state.totalCart = 0;
    state.descriptionCart = "";
    state.addressCart = "";
    
  },
  addCart(state:any, data:any) {
    state.totalCart = state.totalCart + data.price;
    
 let isInCart =
 state.carts.find((item:any)=> item.store_name==data.store_name);


 if(!isInCart){

  data.count = 1;
  let data_cart:Cart={
    store_id:0,store_name:"",
    time_delivery:"",
    cost_delivery:0,
    tax:0,
    status:0,ago:"",products:[]} ;
  data_cart.store_id = data.store_id;
  data_cart.store_name= data.store_name;

  // add details 
  let details =  data.details;

  details.map((item:any,i:number) =>{
     if(item.status){
      state.totalCart = state.totalCart + item.price;
      details[i].count = 1;
     }else{
    
      details[i].count = 0;
     }
  })
  data.details = details;


  data_cart.products.push(data);
 



  state.carts.push(data_cart);

  // add detial section

 }else{

  let index = state.carts.findIndex((item:any) => item.store_name==data.store_name);
  let isProductStore = state.carts[index].products.find((item:any)=> item.id==data.id);
   if(!isProductStore){
    data.count = 1;
    let details =  data.details;

    details.map((item:any,i:number) =>{
       if(item.status){
        state.totalCart = state.totalCart + item.price;
        details[i].count = 1;
       }else{
      
        details[i].count = 0;
       }
    })
    data.details = details;
    
  state.carts[index].products.push(data);
 

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



   
    if(state.carts[index].products.length==0){
      console.log("ttt",state.carts[index].products.length)
      state.carts.splice(index,1);
    }
 
    else
    console.log("ttt2",state.carts[index].products.length)
    
    
   
  },

  addCartOption(state:any, data:any) {
    console.log("ttttt",data)
    let cart = data.cart;
    let detail = data.detail;
    let count = data.count;
  //  state.totalCart = state.totalCart + data.price;
    
  console.log("ttttt1",cart)
  console.log("ttttt2",detail)
  console.log("ttttt3",count)
    let index = cart.details.findIndex((item:any) => item.id==detail.id);
    console.log("ttttt",index)
    console.log("ttttt",cart.details[index])

    if(count==0){
      state.totalCart = state.totalCart -  cart.details[index].price *(   cart.details[index].count )
      cart.details[index].count = 0 ; 
      cart.details[index].status = 0 ; 
     
    }else{
      state.totalCart = state.totalCart +  cart.details[index].price *(   cart.details[index].count +1);
      cart.details[index].status = 1 ; 
      cart.details[index].count  =   count;

    }

    console.log("ttt",state.totalCart)
  

      let index_cart = state.carts.findIndex((item:any) => item.store_name==cart.store_name);

      let index2 = state.carts[index_cart].products.findIndex((item:any) => item.id==data.id);

   
      console.log("ttttt,",cart)

  state.carts[index_cart].products.splice(index2,1,cart);



 

 
   // push(data)
  },

  

  addAddressCart(state:any, txt:string){state.addressCart = txt;},
  addDescriptionCart(state:any, txt:string){state.descriptionCart = txt;},

  updateStoreCart(state:any, data:any) {
    //state.totalCart = state.totalCart + data.price;
    data.map((data_item:any)=>{
      let index = state.carts.findIndex((item:any) => item.store_id==data_item.id);
       state.carts[index].status = data_item.status;
       state.carts[index].ago = data_item.ago;
       state.carts[index].tax = data_item.tax;
       state.carts[index].cost_delivery = data_item.cost_delivery;
       
    })



  },


}

export const actions: ActionTree<AuthState, any> = {




  async addCart({ commit, dispatch }, data) {
    commit('addCart',data)
    //Vue.$toast.success("به سبد خرید افزوده شد")
   
  },
  async addCartOption({ commit, dispatch }, data) {
    commit('addCartOption',data)
   // Vue.$toast.error("به سبد خرید افزوده شد")
   
  },
  async removeCart({ commit, dispatch }, data) {
    commit('removeCart',data)
   // Vue.$toast.error("به سبد خرید افزوده شد")
   
  },
  async clearCart({ commit, dispatch }) {
   
    commit('clearCart')
   // Vue.$toast.error("به سبد خرید افزوده شد")
   
  },
  async addAddressCart({ commit, dispatch }, data) {
    commit('addAddressCart',data)
   // Vue.$toast.error("به سبد خرید افزوده شد")
   
  },
  async addDescriptionCart({ commit, dispatch }, data) {
    commit('addDescriptionCart',data)
   // Vue.$toast.error("به سبد خرید افزوده شد")
   
  },
  async updateStoreCart({ commit, dispatch }, data) {
    commit('updateStoreCart',data)
  
    this.dispatch("home/addDataSent",false);
  },
}
