import { ActionTree, MutationTree, GetterTree } from 'vuex'
import  DB  from '~/data/db'
import Vue from 'vue'

export const state = () => ({
  token: '',
   userAddresses:[],
   selected_address:{},
  isLoggedIn: false,
  isRegisterIn: false,
  showUserAddresses: false,
})
export type AuthState = ReturnType<typeof state>

export const getters: GetterTree<AuthState, any> = {
  isLoggedIn: (state: any) => state.isLoggedIn,
  isRegisterIn: (state: any) => state.isRegisterIn,
  mobile: (state: any) => state.mobile,
  name: (state: any) => state.name,
  inviteCode: (state: any) => state.inviteCode,
  token: (state: any) => state.token,
  userAddresses: (state: any) => state.userAddresses,
  selected_address: (state: any) => state.selected_address,
  showUserAddresses: (state: any) => state.showUserAddresses,
}

export const mutations: MutationTree<AuthState> = {
 
getAddresses(state:any,data:any) {

 
    state.userAddresses = data.result; 
    state.selected_address = data.result.length>0?data.result[0]:{}
      if(!state.selected_address){
        //  state.selected_address = data.result.length>0?data.result[0]:{}
      }
   
  },

  changeSelectedAddress(state:any,data:any) {

   
    state.selected_address = data;
  },
  showUserAddresses(state:any,data:any) {

   
    state.showUserAddresses = data;
  },
}

export const actions: ActionTree<AuthState, any> = {


  async userAddresses({ commit, dispatch }, data) {
    await this.$repositories
      .users()
      .customerAddresses(data)
      .then((res:any) => {
     
      
        commit('getAddresses',res.data)
      })
      .catch((error:any) => {
    
      
        Vue.$toast.error("خطا ! لطفا دوباره  یا بعدا تلاش کنید")
      })
  },

  async addAddress({ commit, dispatch }, data) {
    let token = {
      api_token : data.api_token
    }
    await this.$repositories
      .users()
      .addCustomerAddress(data)
      .then((res:any) => {
     
        this.dispatch('user/userAddresses',token)
        Vue.$toast.success("آدرس با موفقیت اضافه گردید")
       // commit('getAddresses',res.data)
      })
      .catch((error:any) => {
    
        Vue.$toast.error("خطا ! لطفا دوباره  یا بعدا تلاش کنید")
      })
  },
  async updateAddress({ commit, dispatch }, data) {
    let token = {
      api_token : data.api_token
    }
    await this.$repositories
      .users()
      .updateCustomerAddress(data)
      .then((res:any) => {
        Vue.$toast.success("به روزسانی آدرس با موفقیت انجام شد")

        this.dispatch('user/userAddresses',token)
      })
      .catch((error:any) => {
       
      
        Vue.$toast.error("خطا ! لطفا دوباره  یا بعدا تلاش کنید")
      })
  },

  async deleteAddress({ commit, dispatch }, data) {
 
    let token  = {
      api_token: data.api_token
   };
    await this.$repositories
      .users()
      .deleteCustomerAddress(data)
      .then((res:any) => {
     
      
       if(!res.data.status){
       Vue.$toast.success("حذف آدرس با موفقیت انجام شد")
    
         
          this.dispatch('user/userAddresses',token)
       }
      })
      .catch((error:any) => {
        
      
       
      })
  },

  async changeSelectedAddress({ commit, dispatch }, data) {
   
    commit('changeSelectedAddress',data);
  },
  async showUserAddresses({ commit, dispatch }, data) {
   
    commit('showUserAddresses',data);
  },
}
