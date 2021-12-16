import LoginBody from "../../model/auth/LoginBody";
import ChangePasswordBody from "../../model/auth/ChangePasswordBody";

export default class ClientService {

  private readonly baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  login(body: LoginBody): Promise<Response> {
    return fetch(`${this.baseUrl}/api/v1/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(body),
    })
  }

  getUserInfo(token: string): Promise<Response> {
    return fetch(`${this.baseUrl}/api/v1/user/info`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        'authorization': `Bearer ${token}`,
      }
    })
  }

  getUsers(token: string): Promise<Response> {
    return fetch(`${this.baseUrl}/api/v1/user`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        'authorization': `Bearer ${token}`,
      }
    })
  }

  getUserById(userId: string, token: string): Promise<Response> {
    return fetch(`${this.baseUrl}/api/v1/user/${userId}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        'authorization': `Bearer ${token}`,
      }
    })
  }

  changePassword(body: ChangePasswordBody, token: string): Promise<Response> {
    return fetch(`${this.baseUrl}/api/v1/user/change-password`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        'authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    })
  }

}
