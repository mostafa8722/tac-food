import {NuxtAxiosInstance} from '@nuxtjs/axios'

import Auth from '~/data/repositories/auth'
import HomeRepository from '~/data/repositories/homeRepository'
import CategoriesRepository from '~/data/repositories/categoriesRepository'
import productsRepository from '~/data/repositories/productsRepository'
import ProductsRepository from '~/data/repositories/productsRepository'


export default class Repositories {
  axios: NuxtAxiosInstance

  constructor($axios: NuxtAxiosInstance) {
    this.axios = $axios
  }

  user = () => new Auth(this.axios)
  home = () => new HomeRepository(this.axios)
  categories = () => new CategoriesRepository(this.axios)
  products = () => new ProductsRepository(this.axios)


}
