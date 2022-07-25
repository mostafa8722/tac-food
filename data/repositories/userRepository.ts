import Repository from '~/data/repositories/repository'

import Comment from '~/data/models/comment'


interface IAddress {api_token: string,}


interface IAddressDelete {api_token: string,id:string}

interface IAddressUpdate {
  api_token: string,
  id:string,
  title:string,
  address:string,
  phone:string,
  postal_code:string,
  lat:string,
  lng:string,

}

interface IAddressAdd {
  api_token: string,
  title:string,
  address:string,
  phone:string,
  postal_code:string,
  lat:string,
  lng:string,

}



interface IOrder {
  api_token:string,
  is_order : boolean
}

interface IReport {
  api_token:string,
  order_id : string,
  step : string,
}

interface IComment {
  api_token:string,
  store_id : string,
  body : string,
  rating : string,
}


export default class UserRepository extends Repository {

 

 
  async customerAddresses(data: IAddress): Promise<any> {

  
    const response = await this.axios.post('v1/address/customer', data)
   
    return response
  }
  async deleteCustomerAddress(data: IAddressDelete): Promise<any> {
    const response = await this.axios.post('v1/address/customer/delete', data)
    return response
  }
  async updateCustomerAddress(data: IAddressUpdate): Promise<any> {
    const response = await this.axios.post('v1/address/customer/update', data)
    return response
  }

  async addCustomerAddress(data: IAddressAdd): Promise<any> {
   
    const response = await this.axios.post('v1/address/customer/add', data)
    return response
  }
  async showMyOrders(data: IOrder): Promise<any> {
   
    const response = await this.axios.post('v1/orders', data)
    return response
  }
  async showOrdersState(data: IOrder): Promise<any> {
   
    const response = await this.axios.post('v1/orders/state', data)
    return response
  }

  async sendReport(data: IReport): Promise<any> {
   
    const response = await this.axios.post('v1/report/insert', data)
    return response
  }

  async sendComment(data: IComment): Promise<any> {
   
    const response = await this.axios.post('v1/comments/insert', data)
    return response
  }

}
