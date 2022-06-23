import Repository from '~/data/repositories/repository'

import Comment from '~/data/models/comment'

interface result  {
  result: Comment[],
 
  status:number,

}

interface inputDataCustomer {
  api_token: string,

}
export default class PaymentsRepository extends Repository {

 


  async customerPaymentsPage(data: inputDataCustomer): Promise<any> {

  
    const response = await this.axios.post('v1/customer/transactions', data)
   
    return response
  }
}
