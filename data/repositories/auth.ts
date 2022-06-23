import Repository from '~/data/repositories/repository'

export default class Auth extends Repository {

  async searchIdentify(data: any): Promise<any> {
    const response = await this.axios.post('/profile/searchIdentify', data)
    return response
  }

  async registerUser(data: any): Promise<any> {
    const response = await this.axios.post('v1/register', data)
    return response
  }

  async loginUser(data: any): Promise<any> {
    const response = await this.axios.post('v1/login', data)
    return response
  }
  
}
