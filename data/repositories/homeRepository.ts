import Repository from '~/data/repositories/repository'
import Location from '~/data/models/location'
import Home from '~/data/models/home'

interface result  {
  result: Home,
  status:number

}

export default class HomeRepository extends Repository {

 

  async HomeCustomer(data: Location): Promise<any> {

    const response = await this.axios.post('v2/customer/home', data)
   
    return response
  }
}
