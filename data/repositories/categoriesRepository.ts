import Repository from '~/data/repositories/repository'

import Home from '~/data/models/home'

interface result  {
  result: Home,
  status:number

}


interface inputCateories  {
  lat: number,
  lng: number,
  type: number,
 

}
export default class CategoriesRepository extends Repository {

 

  async categoriesPage(data: inputCateories): Promise<any> {

    const response = await this.axios.post('v1/stores', data)
   
    return response
  }
}
