import Repository from '~/data/repositories/repository'

import Order from '~/data/interfaces/order'



interface inputDataCustomer {
  api_token: string,

}

interface inputOrder {
  api_token: string,
  orders : Order[],
  payment: string,
  address_id: string,
  comment: string,
  coupon_code: string,
  method: string,

}
interface inputCart {
  lat :string,
  lng:string,
  id:string[],
}


export default class PaymentsRepository extends Repository {

 


  async customerPaymentsPage(data: inputDataCustomer): Promise<any> {
    const response = await this.axios.post('v1/customer/transactions', data)
    return response
  }

  async updateStoreOrder(data: inputCart): Promise<any> {

    const response = await this.axios.post('v2/customer/cart/store/update', data)
    return response
  }

  async addOrder(data: any): Promise<any> {
   
    const response = await this.axios.post('v1/orders/insert', data)
    return response
  }
}
