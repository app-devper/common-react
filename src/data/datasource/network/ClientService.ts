export default class ClientService {
  private readonly baseUrl: string

  constructor (baseUrl: string) {
    this.baseUrl = baseUrl
  }

  login (body: string): Promise<Response> {
    return fetch(`${this.baseUrl}/api/v1/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8'
      },
      body
    })
  }

  keepAlive (token: string): Promise<Response> {
    return fetch(`${this.baseUrl}/api/v1/user/keep-alive`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        authorization: `Bearer ${token}`
      }
    })
  }

  createUser (body: string, token: string): Promise<Response> {
    return fetch(`${this.baseUrl}/api/v1/user`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        authorization: `Bearer ${token}`
      },
      body
    })
  }

  getUserInfo (token: string): Promise<Response> {
    return fetch(`${this.baseUrl}/api/v1/user/info`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        authorization: `Bearer ${token}`
      }
    })
  }

  updateUserInfo (body: string, token: string): Promise<Response> {
    return fetch(`${this.baseUrl}/api/v1/user/info`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        authorization: `Bearer ${token}`
      },
      body
    })
  }

  getUsers (token: string): Promise<Response> {
    return fetch(`${this.baseUrl}/api/v1/user`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        authorization: `Bearer ${token}`
      }
    })
  }

  getUserById (userId: string, token: string): Promise<Response> {
    return fetch(`${this.baseUrl}/api/v1/user/${userId}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        authorization: `Bearer ${token}`
      }
    })
  }

  updateUserById (userId: string, body: string, token: string): Promise<Response> {
    return fetch(`${this.baseUrl}/api/v1/user/${userId}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        authorization: `Bearer ${token}`
      },
      body
    })
  }

  removeUserById (userId: string, token: string): Promise<Response> {
    return fetch(`${this.baseUrl}/api/v1/user/${userId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        authorization: `Bearer ${token}`
      }
    })
  }

  changePassword (body: string, token: string): Promise<Response> {
    return fetch(`${this.baseUrl}/api/v1/user/change-password`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        authorization: `Bearer ${token}`
      },
      body
    })
  }
}
