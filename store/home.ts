import { ActionTree, MutationTree, GetterTree } from 'vuex'


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
})
export type AuthState = ReturnType<typeof state>

export const getters: GetterTree<AuthState, any> = {
  categories: (state: any) => state.categories,
  sliders: (state: any) => state.sliders,
  populars: (state: any) => state.populars,
  discunts: (state: any) => state.discunts,
  status: (state: any) => state.status,
}

export const mutations: MutationTree<AuthState> = {
 
  homePage(state:any, data:resultHome) {
    console.log("loadin333...",data)
    state.categories = data.result.types
    state.sliders = data.result.advertises
    state.populars = data.result.most_popular
    state.discunts = data.result.discounts
   
  },
  homePage2(state:any, data:any) {


    console.log("rrrrrrrrrr",data)
    state.categories = data;
 
   
  },
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
  
 /* commit('homePage2',[
    {name:"غذا",id:1,image:"https://ponisha.ir/asset/v1/img/fa-logo.png",color:"#ff2200"},
    {name:"میوه",id:2,image:"https://ponisha.ir/asset/v1/img/fa-logo.png",color:"#ff2200"},
    {name:"میوه",id:3,image:"https://ponisha.ir/asset/v1/img/fa-logo.png",color:"#ff2200"},
  ]);*/
},
async homePage({ commit, dispatch }, data) {
  
   
  console.log("loading data3................");
  

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
  
}
