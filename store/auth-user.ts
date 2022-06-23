import { ActionTree, MutationTree, GetterTree } from 'vuex'
import  DB  from '~/data/db'
import Vue from 'vue'

export const state = () => ({
  token: '',
  status: '',
  mobile: '',
  inviteCode: '',
  name: '',
  isLoggedIn: false,
  isRegisterIn: false,
})
export type AuthState = ReturnType<typeof state>

export const getters: GetterTree<AuthState, any> = {
  isLoggedIn: (state: any) => state.isLoggedIn,
  isRegisterIn: (state: any) => state.isRegisterIn,
  mobile: (state: any) => state.mobile,
  name: (state: any) => state.name,
  inviteCode: (state: any) => state.inviteCode,
  token: (state: any) => state.token,
}

export const mutations: MutationTree<AuthState> = {
  registerError(state:any) {
    state.status = 'register_error'
  },
  registered(state:any,data:any) {
    state.mobile = data.phone; 
    state.name = data.name; 
    state.inviteCode = data.invite_code; 
    state.isRegisterIn = true;
  },
  async loggedIn(state:any, data:any) {
    state.isLoggedIn = true
    state.token = data.api_token; 
   
    await  DB.users.clear();
  
    await  DB.users.put(data);


   
  },
}

export const actions: ActionTree<AuthState, any> = {


  async searchIdentify({ commit, dispatch }, data) {
    await this.$repositories
      .user()
      .searchIdentify(data)
      .then((res:any) => {
        const message = res.data.message
        dispatch('toast/showSuccessToast', message, { root: true })
      })
      .catch((error:any) => {
        dispatch('toast/showErrorToast', error, { root: true })
      })
    commit('registered')
  },
  async registerUser({ commit, dispatch }, data:{name:string,phone:string,invite_code:string}) {
  
    await this.$repositories
      .user()
      .registerUser(data)
      .then((res:any) => {

        Vue.$toast.success("کدفعالسازی به شماره موبایل شما ارسال شد")
       commit('registered', data)
       this.$router.push('/login/verifyCode')
      
      })
      .catch((error:any) => {
        //dispatch('toast/showErrorToast', error, { root: true })
        Vue.$toast.error("خطا ! لطفا دوباره  یا بعدا تلاش کنید")
      })
   
  },

  async loginUser({ commit, dispatch }, data:{invite_code:string,code:string,phone:string}) {
     

    await this.$repositories
      .user()
      .loginUser(data)
      .then((res:any) => {
    
        
        Vue.$toast.success(" اطلاعات شما به روزرسانی گردید")
      
      commit('loggedIn', res.data.result)
        this.$router.push('/profile')
      })
      .catch((error:any) => {
        Vue.$toast.error("خطا ! لطفا دوباره  یا بعدا تلاش کنید")
      })
  },
}
