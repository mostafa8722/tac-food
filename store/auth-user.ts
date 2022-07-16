import { ActionTree, MutationTree, GetterTree } from 'vuex'

import Vue from 'vue'
import Cookies from 'js-cookie'

export const state = () => ({
  token: '',
  status: '',
  mobile: '',
  inviteCode: '',
  name: '',
  isLoggedIn: false,
  isRegisterIn: false,
  refresh_code: false,
})
export type AuthState = ReturnType<typeof state>

export const getters: GetterTree<AuthState, any> = {
  isLoggedIn: (state: any) => state.isLoggedIn,
  isRegisterIn: (state: any) => state.isRegisterIn,
  mobile: (state: any) => state.mobile,
  name: (state: any) => state.name,
  inviteCode: (state: any) => state.inviteCode,
  token: (state: any) => state.token,
  refresh_code: (state: any) => state.refresh_code,
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
   

    Cookies.remove('user') ;
  

    Cookies.set('user',JSON.stringify(data)) ;
    

   
  },
  async setRefreshCode(state:any, data:boolean) {
 
    state.refresh_code = data; 
  
    

   
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
  async registerUser({ commit, dispatch }, data:{name:string,phone:string,invite_code:string,send_again:boolean}) {
   if(!data.name)
    return Vue.$toast.error("نام نمی تواند خالی باشد !")
    else if(data.phone.length!=11)
    return Vue.$toast.error("شماره موبایل وارد شده صحیح نمی باشد ")

     commit("setRefreshCode",false)
    this.dispatch('home/addDataSent',true)
  
    await this.$repositories
      .user()
      .registerUser(data)
      .then((res:any) => {
        this.dispatch('home/addDataSent',false);
        Vue.$toast.success("کدفعالسازی به شماره موبایل شما ارسال شد")
       commit('registered', data)
       if(data.send_again)
       commit("setRefreshCode",true)
       else
       this.$router.push('/login/verifyCode')
      
      })
      .catch((error:any) => {
        this.dispatch('home/addDataSent',false);
      })
   
  },

  async loginUser({ commit, dispatch }, data:{invite_code:string,code:string,phone:string}) {
    this.dispatch('home/addDataSent',true);

    await this.$repositories
      .user()
      .loginUser(data)
      .then((res:any) => {
    
        this.dispatch('home/addDataSent',false);
        Vue.$toast.success(" اطلاعات شما به روزرسانی گردید")
      
      commit('loggedIn', res.data.result)
        this.$router.push('/profile')
      })
      .catch((error:any) => {
        this.dispatch('home/addDataSent',false);
      })
  },
   loginUserw({ commit, dispatch },data:any){
    commit('loggedIn', {api_token:""})
     }
  
}
