import { NuxtAxiosInstance } from '@nuxtjs/axios'


export default abstract class Repository {
  axios: NuxtAxiosInstance
  constructor ($axios: NuxtAxiosInstance) {
    this.axios = $axios
  }
}
