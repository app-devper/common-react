import Login from '../../domain/entity/auth/Login'

import ClientService from '../datasource/network/ClientService'
import LoginParam from '../../domain/entity/auth/LoginParam'
import LocalDataSource from '../datasource/local/LocalDatasource'
import ErrorModel from '../../domain/entity/error/ErrorModel'
import AuthRepository from '../../domain/repository/AuthRepository'

export default class AuthRepositoryImpl implements AuthRepository {
  private service: ClientService
  private localDataSource: LocalDataSource

  constructor (service: ClientService, localDataSource: LocalDataSource) {
    this.service = service
    this.localDataSource = localDataSource
  }

  async login (param: LoginParam): Promise<Login> {
    try {
      const response = await this.service.login(JSON.stringify(param))
      if (response.ok) {
        const login: Login = await response.json()
        await this.localDataSource.cacheToken(login.accessToken)
        return Promise.resolve(login)
      } else {
        const error: ErrorModel = await response.json()
        return Promise.reject(new Error(error.error))
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async keepAlive (): Promise<Login> {
    try {
      const token = await this.localDataSource.getLastToken()
      const response = await this.service.keepAlive(token)
      if (response.ok) {
        const login: Login = await response.json()
        await this.localDataSource.cacheToken(login.accessToken)
        return Promise.resolve(login)
      } else {
        const error: ErrorModel = await response.json()
        return Promise.reject(new Error(error.error))
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async getRole (): Promise<string> {
    try {
      const token = await this.localDataSource.getLastToken()
      const data = JSON.parse(atob(token.split('.')[1]))
      const { role } = data
      if (role) {
        return Promise.resolve(role)
      } else {
        return Promise.reject(new Error('Invalid payload'))
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
