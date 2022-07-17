import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { LOCATION_DEFAULT } from '~/data/default'




export const state = () => ({
  installPromptEvent:undefined,
  

  status: '',
  isSendingData: false,
  isHomeIconAdd: false,
  location: LOCATION_DEFAULT,
  location_address :{address_title:"",address_postal:""}
})
export type AuthState = ReturnType<typeof state>

export const getters: GetterTree<AuthState, any> = {
  installPromptEvent: (state: any) => state.installPromptEvent,
  isHomeIconAdd: (state: any) => state.isHomeIconAdd,
  location: (state: any) => state.location,
  location_address: (state: any) => state.location_address,
  isSendingData: (state: any) => state.isSendingData,
  
}

export const mutations: MutationTree<AuthState> = {
 
  setInstallPromptEvent(state:any, data:any) {state.installPromptEvent = data},
  setLocation(state:any, data:any) {
   
    state.location = data? data : LOCATION_DEFAULT;
  },

  setLocationAddress(state:any, data:any) {
   
    state.location_address =  data ;
  },
  setSendingData(state:any, data:boolean) {
   
    state.isSendingData =  data ;
  },
}

export const actions: ActionTree<AuthState, any> = {



 
async addInstallPromptEvent({ commit, dispatch }, data) {
 
  commit('setInstallPromptEvent',data)
 
},

async getLocation({ commit, dispatch }) {
 

  commit('setLocation')
 
},
async addLocationAddress({ commit, dispatch }, data) {
  
   
  

  commit('setSendingData',true)


  await this.$repositories
    .home()
    .setMapAddress(data)
    .then((res:any) => {
      commit('setSendingData',false)
          
      commit('setLocationAddress',res.data.result)

    })
    .catch((error:any) => {
      commit('setSendingData',false)

    })
},
async addLocalLocationAddress({ commit, dispatch }, data) {
  commit('setLocationAddress',data)
}
  
}
