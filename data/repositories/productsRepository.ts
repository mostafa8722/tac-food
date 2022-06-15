import Repository from '~/data/repositories/repository'

import Product from '~/data/models/product'

interface result  {
  result: Product[],
  delivery:number,
  status:number,

}


interface inputData {
  store_id: number,

 

}
export default class ProductsRepository extends Repository {

 

  async productsPage(data: inputData): Promise<any> {

    const response = await this.axios.post('v1/products', data)
   
    return response
  }
}
