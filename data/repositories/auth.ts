import Repository from '~/data/repositories/repository'

export default class Auth extends Repository {

  async searchIdentify(data: any): Promise<any> {
    const response = await this.axios.post('/profile/searchIdentify', data)
    return response
  }

  async registerUser(data: any): Promise<any> {
    const response = await this.axios.post('/guest/register', data)
    return response
  }

  async loginUser(data: any): Promise<any> {
    const response = await this.axios.post('/guest/login', data)
    return response
  }
}
