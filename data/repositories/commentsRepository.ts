import Repository from '~/data/repositories/repository'

import Comment from '~/data/models/comment'

interface result  {
  result: Comment[],
 
  status:number,

}


interface inputData {
  store_id: number,
  api_token:string

}
interface inputDataCustomer {
  api_token: string,

}

interface inputComment {
  api_token: string,
  store_id: string,
  body: string,
  rating: string,

}

interface likeComment {
  api_token: string,
  favorite_id: number,
  command: string,
  

}
export default class CommentsRepository extends Repository {

 

  async commentsPage(data: inputData): Promise<any> {

    console.log("tttthhh",data)
    const response = await this.axios.post('v1/comments', data)
   
    return response
  }
  async customerCommentsPage(data: inputDataCustomer): Promise<any> {

  
    const response = await this.axios.post('v1/customer/comments', data)
   
    return response
  }
  async AddComment(data: inputComment): Promise<any> {

  
    const response = await this.axios.post('v1/comments/insert', data)
   
    return response
  }

  async likeComment(data: likeComment): Promise<any> {

    console.log("ttffff",data);
  
    const response = await this.axios.post('v1/favorites', data)
   
    return response
  }
}
