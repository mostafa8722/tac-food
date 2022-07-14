import { ActionTree, MutationTree, GetterTree } from 'vuex'
import Vue from 'vue'
import  DB  from '~/data/db'

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
  authenticatedCode : 200,
})
export type AuthState = ReturnType<typeof state>

export const getters: GetterTree<AuthState, any> = {
  categories: (state: any) => state.categories,
  sliders: (state: any) => state.sliders,
  populars: (state: any) => state.populars,
  discunts: (state: any) => state.discunts,
  status: (state: any) => state.status,
  isDataSent: (state: any) => state.isDataSent,
  authenticatedCode: (state: any) => state.authenticatedCode,
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
   setAuthenticatedCode(state:any,data:any ) {
   // await  DB.table("users").clear();

   // await DB.table("users").count((item:any) => console.log("ttttttttttt2",item));
  
 
   if(data.data.status ==401 || data.data.status==403)
   data.router.push('/logout')

   
    state.authenticatedCode = data.data.status;},
}

export const actions: ActionTree<AuthState, any> = {



  /*
  nuxtServerInit(vuexCi){

  }
*/

/*nuxtServerInit ({ commit }, data) {
  console.log("loading data................");
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

  console.log("loading....................")
},
async homePage3({ commit, dispatch }, data) {
  
  commit('homePage',data)
  

},
async homePage({ commit, dispatch }, data) {
  
   
 
  

  await this.$repositories
    .home()
    .HomeCustomer(data)
    .then((res:any) => {
      console.log("loading d",res.data);
      commit('homePage',res.data)
    })
    .catch((error:any) => {
      
      console.log("loading error",error);
   
     // dispatch('toast/showErrorToast', error, { root: true })
    })
}
  ,
  async addProposal({ commit, dispatch }, data) {
  
   
 
    commit('setDataSent',true)
    console.log("loading error",data)
    await this.$repositories
      .home()
      .AddPropsal(data)
      .then((res:any) => {
        commit('setDataSent',false)
        Vue.$toast.success("پیشنهاد شما با موفقیت ارسال شد")
       // commit('homePage',res.data)
      })
      .catch((error:any) => {
        console.log("loading error",error)
        Vue.$toast.error("خطا ! لطفا دوباره  یا بعدا تلاش کنید")
        
       // console.log("loading error",error);
     
       // dispatch('toast/showErrorToast', error, { root: true })
      })
  },
  async addPyment({ commit, dispatch }, data) {
  
   
 
    commit('setDataSent',true)
    console.log("loading error",data)
    await this.$repositories
      .home()
      .AddPropsal(data)
      .then((res:any) => {
        commit('setDataSent',false)
     
        console.log("tttt",res.data)
        Vue.$toast.success("اطاعات شما با موفقیت ارسال شد")
       // commit('homePage',res.data)
      })
      .catch((error:any) => {
        commit('setDataSent',false)

      })
  },
  async addCommnet({ commit, dispatch }, data) {
  
   
 
    commit('setDataSent',false)
    console.log("loading error",data)
    await this.$repositories
      .comments()
      .AddComment(data)
      .then((res:any) => {
        commit('setDataSent',true)
        Vue.$toast.success("نظر شما با موفقیت ارسال شد")
       // commit('homePage',res.data)
      })
      .catch((error:any) => {
        console.log("loading error",error)
        Vue.$toast.error("خطا ! لطفا دوباره  یا بعدا تلاش کنید")
        
       // console.log("loading error",error);
     
       // dispatch('toast/showErrorToast', error, { root: true })
      })
  },

  async authenticatedCode({ commit, dispatch }, data) {
  

   let new_data ={
data:data,
router : this.$router
   }
    commit('setAuthenticatedCode',new_data)
  
  }

    
}
