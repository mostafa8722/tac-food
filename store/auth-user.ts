import { ActionTree, MutationTree, GetterTree } from 'vuex'

export const state = () => ({
  token: '',
  status: '',
  isLoggedIn: false,
})
export type AuthState = ReturnType<typeof state>

export const getters: GetterTree<AuthState, any> = {
  isLoggedIn: (state: any) => !!state.token,
}

export const mutations: MutationTree<AuthState> = {
  registerError(state:any) {
    state.status = 'register_error'
  },
  registered(state:any) {
    state.status = 'registered'
  },
  loggedIn(state:any, token:string) {
    state.isLoggedIn = true
    state.token = token
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
  async registerUser({ commit, dispatch }, data) {
    await this.$repositories
      .user()
      .registerUser(data)
      .then((res:any) => {
        const message = res.data.message
        dispatch('toast/showSuccessToast', message, { root: true })
        this.$router.replace('/login')
      })
      .catch((error:any) => {
        dispatch('toast/showErrorToast', error, { root: true })
      })
   
  },

  async loginUser({ commit, dispatch }, data) {
      console.log("ttttt",this.$repositories)
      dispatch('toast/showErrorToast', {}, { root: true })
      alert("tt2")
   /* await this.$repositories
      .user()
      .loginUser(data)
      .then((res:any) => {
        const token = res.data.data.access_token
        window.localStorage.setItem('token', res.data.data.access_token)
        commit('loggedIn', token)
      })
      .catch((error:any) => {
        dispatch('toast/showErrorToast', error, { root: true })
      })*/
  },
}
