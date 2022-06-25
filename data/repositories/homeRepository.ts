import Repository from '~/data/repositories/repository'
import Location from '~/data/models/location'
import Home from '~/data/models/home'

interface result  {
  result: Home,
  status:number

}

interface Proposal{
  api_token :string,
  subject:string,  
  experiance:string,
   describe:string
}

interface Pyment{
  api_token :string,
  payment:string,  

}

export default class HomeRepository extends Repository {

 

  async HomeCustomer(data: Location): Promise<any> {

    const response = await this.axios.post('v2/customer/home', data)
   
    return response
  }
  async AddPropsal(data: Proposal): Promise<any> {

    const response = await this.axios.post('v1/customer/feedback/insert', data)
   
    return response
  }
  async AddPyment(data: Pyment): Promise<any> {

    const response = await this.axios.post('v1/customer/balance/increment', data)
   
    return response
  }
}
