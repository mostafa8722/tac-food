import { ActionTree, MutationTree, GetterTree } from 'vuex'
import Vue from 'vue'
import VueToast from 'vue-toast-notification';

Vue.use(VueToast);

export const state = () => ({
  showError: false,
  errorText: '',
  showSuccess: false,
  successText: '',
})
export type ToastState = ReturnType<typeof state>

export const getters: GetterTree<ToastState, any> = {
  showError(state) {
    return state.showError
  },
  errorText(state) {
    return state.errorText
  },
  showSuccess(state) {
    return state.showSuccess
  },
  successText(state) {
    return state.successText
  },
}

export const mutations: MutationTree<ToastState> = {
  SHOW_ERROR(state, errorText) {   
     
   
          state.showError = true
          state.errorText = "errorText.message"
         
          
          setTimeout(() => {
              state.showError = false
            }, 1000)
  },
  SHOW_SUCCESS(state, successText) {
      state.showSuccess = true
      state.successText = successText
      setTimeout(() => {
        state.showSuccess = false
      }, 100)
  },
}

export const actions: ActionTree<ToastState, any> = {
    showSuccessToast({ commit }, message:string) {
      Vue.$toast.success(message);
      //  commit("SHOW_SUCCESS", data)
    },
    showErrorToast({ commit }, error) {
      console.log(error)
       //Vue.$toast.error("settings updated successfully",)
       
       
        
      //  commit("SHOW_ERROR", data)
    }
}
