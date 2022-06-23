import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { LOCATION_DEFAULT } from '~/data/default'




export const state = () => ({
  installPromptEvent:undefined,
  

  status: '',
  isHomeIconAdd: false,
  location: LOCATION_DEFAULT,
})
export type AuthState = ReturnType<typeof state>

export const getters: GetterTree<AuthState, any> = {
  installPromptEvent: (state: any) => state.installPromptEvent,
  isHomeIconAdd: (state: any) => state.isHomeIconAdd,
  location: (state: any) => state.location,
  
}

export const mutations: MutationTree<AuthState> = {
 
  setInstallPromptEvent(state:any, data:any) {state.installPromptEvent = data},
  setLocation(state:any, data:any) {
   
    state.location = data? data : LOCATION_DEFAULT;
  },
}

export const actions: ActionTree<AuthState, any> = {



 
async addInstallPromptEvent({ commit, dispatch }, data) {
 
  commit('setInstallPromptEvent',data)
 
},

async getLocation({ commit, dispatch }) {
 

  commit('setLocation')
 
},

  
}
