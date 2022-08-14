import { ActionTree, MutationTree, GetterTree } from 'vuex'
import Vue from 'vue'
import Cookies  from 'js-cookie'

import Home from '~/data/models/home'
interface resultHome  {
  result: Home,
  status:number

}

export const state = () => ({
  categories:[] ,
  sliders:[] ,
  populars:[] ,
  discunts:[] ,

  status: '',
  isLoggedIn: false,
  isDataSent : false,
  isLoading : false,
  authenticatedCode : 200,
  walletCredit : 0,
})
export type AuthState = ReturnType<typeof state>

export const getters: GetterTree<AuthState, any> = {
  categories: (state: any) => state.categories,
  sliders: (state: any) => state.sliders,
  populars: (state: any) => state.populars,
  discunts: (state: any) => state.discunts,
  status: (state: any) => state.status,
  isDataSent: (state: any) => state.isDataSent,
  isLoading: (state: any) => state.isLoading,
  authenticatedCode: (state: any) => state.authenticatedCode,
  walletCredit: (state: any) => state.walletCredit,
}

export const mutations: MutationTree<AuthState> = {
 
  homePage(state:any, data:resultHome) {
 
    state.categories = data.result.types
    state.sliders = data.result.advertises
    state.populars = data.result.most_popular
    state.discunts = data.result.discounts
   
  },
  homePage2(state:any, data:any) {



    state.isDataSent = data;
 
   
  },
  setDataSent(state:any,isSent:boolean ) {state.isDataSent = isSent;},
  setWalletCredit(state:any,data:number ) {state.walletCredit = data;},
  setLoading(state:any,isSent:boolean ) {state.isLoading = isSent;},
   setAuthenticatedCode(state:any,data:any ) {

 
   if((data.data.status ==401 || data.data.status==403) && !Cookies.get("user"))
   data.router.push('/login')
else if((data.data.status ==401 || data.data.status==403) && Cookies.get("user"))
data.router.push('/logout')
   
    state.authenticatedCode = data.data.status;},
}

export const actions: ActionTree<AuthState, any> = {



  /*
  nuxtServerInit(vuexCi){

  }
*/

/*nuxtServerInit ({ commit }, data) {

  return this.$repositories
  .home()
  .HomeCustomer(data)
  .then((res:any) => {
   
    commit('homePage',res.data)
  })
  .catch((error:any) => {
  
   // dispatch('toast/showErrorToast', error, { root: true })
  })
 

},*/

nuxtServerInit(vuexContext,context){

 
},
async homePage3({ commit, dispatch }, data) {
  
  commit('homePage',data)
  

},
async homePage({ commit, dispatch }, data) {
  
   
 
  

  await this.$repositories
    .home()
    .HomeCustomer(data)
    .then((res:any) => {
   
      commit('homePage',res.data)
    })
    .catch((error:any) => {
      
    
   
     // dispatch('toast/showErrorToast', error, { root: true })
    })
}
  ,
  async addProposal({ commit, dispatch }, data) {
  
   
 
    commit('setDataSent',true)

    await this.$repositories
      .home()
      .AddPropsal(data)
      .then((res:any) => {
        commit('setDataSent',false)
        Vue.$toast.success("پیشنهاد شما با موفقیت ارسال شد")
       // commit('homePage',res.data)
      })
      .catch((error:any) => {
      
      
      })
  },
  async addPyment({ commit, dispatch }, data) {
  
   
    if(data.payment<5000)
    return Vue.$toast.error("حداقل مقدار وارد شده نمی تواند کمتر از 5000 هزار تومان باشد ")

 
    commit('setDataSent',true)
  

    await this.$repositories
      .home()
      .AddPyment(data)
      .then((res:any) => {
        commit('setDataSent',false)
        
        if( res.data.status==0)
        location.href = res.data.url
        else
        Vue.$toast.error(" مشکلی در ارسال اطلاعات وجود دارد لطفا با پشتیبانی تماس بگیرید")
       // commit('homePage',res.data)
      })
      .catch((error:any) => {
        commit('setDataSent',false)

      })
  },
  
  async walletBill({ commit, dispatch }, data) {
  
   
  
 
    //commit('setDataSent',true)
  

    await this.$repositories
      .home()
      .walletBill(data)
      .then((res:any) => {
    
      if(res.data.credits)
      commit('setWalletCredit',res.data.credits)
      })
      .catch((error:any) => {
        //commit('setDataSent',false)

      })
  },
  async addCommnet({ commit, dispatch }, data) {
  
   
 
    commit('setDataSent',false)
  
    await this.$repositories
      .comments()
      .AddComment(data)
      .then((res:any) => {
        commit('setDataSent',true)
        Vue.$toast.success("نظر شما با موفقیت ارسال شد")
       // commit('homePage',res.data)
      })
      .catch((error:any) => {
       
      })
  },

  async authenticatedCode({ commit, dispatch }, data) {
  

   let new_data ={
data:data,
router : this.$router
   }
    commit('setAuthenticatedCode',new_data)
  
  },
  async addDataSent({ commit, dispatch }, data) {
       commit('setDataSent',data)
   
   },
   async handleLoading({ commit, dispatch }, data) {
    commit('setLoading',data)

}

    
}
