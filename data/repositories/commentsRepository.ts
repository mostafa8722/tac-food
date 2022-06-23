import Repository from '~/data/repositories/repository'

import Comment from '~/data/models/comment'

interface result  {
  result: Comment[],
 
  status:number,

}


interface inputData {
  store_id: number,

}
interface inputDataCustomer {
  api_token: string,

}
export default class CommentsRepository extends Repository {

 

  async commentsPage(data: inputData): Promise<any> {

    const response = await this.axios.post('v1/comments', data)
   
    return response
  }
  async customerCommentsPage(data: inputDataCustomer): Promise<any> {

  
    const response = await this.axios.post('v1/customer/comments', data)
   
    return response
  }
}
