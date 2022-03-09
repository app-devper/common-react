import ChangePasswordParam from '../../domain/entity/user/ChangePasswordParam'
import User from '../../domain/entity/user/User'
import ClientService from '../datasource/network/ClientService'
import LocalDataSource from '../datasource/local/LocalDatasource'
import ErrorModel from '../../domain/entity/error/ErrorModel'
import CreateUserParam from '../../domain/entity/user/CreateUserParam'
import UpdateUserParam from '../../domain/entity/user/UpdateUserParam'
import UserRepository from '../../domain/repository/UserRepository'

export default class UserRepositoryImpl implements UserRepository {
  private service: ClientService
  private localDataSource: LocalDataSource

  constructor (service: ClientService, localDataSource: LocalDataSource) {
    this.service = service
    this.localDataSource = localDataSource
  }

  async createUser (param: CreateUserParam): Promise<User> {
    try {
      const token = await this.localDataSource.getLastToken()
      const response = await this.service.createUser(JSON.stringify(param), token)
      if (response.ok) {
        return Promise.resolve(response.json())
      } else {
        const error: ErrorModel = await response.json()
        return Promise.reject(new Error(error.error))
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async changePassword (param: ChangePasswordParam): Promise<User> {
    try {
      const token = await this.localDataSource.getLastToken()
      const response = await this.service.changePassword(JSON.stringify(param), token)
      if (response.ok) {
        const user: User = await response.json()
        return Promise.resolve(user)
      } else {
        const error: ErrorModel = await response.json()
        return Promise.reject(new Error(error.error))
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async getUserById (userId: string): Promise<User> {
    try {
      const token = await this.localDataSource.getLastToken()
      const response = await this.service.getUserById(userId, token)
      if (response.ok) {
        const user: User = await response.json()
        return Promise.resolve(user)
      } else {
        const error: ErrorModel = await response.json()
        return Promise.reject(new Error(error.error))
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async getUserInfo (): Promise<User> {
    try {
      const token = await this.localDataSource.getLastToken()
      const response = await this.service.getUserInfo(token)
      if (response.ok) {
        const user: User = await response.json()
        return Promise.resolve(user)
      } else {
        const error: ErrorModel = await response.json()
        return Promise.reject(new Error(error.error))
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async getUsers (): Promise<Array<User>> {
    try {
      const token = await this.localDataSource.getLastToken()
      const response = await this.service.getUserInfo(token)
      if (response.ok) {
        const users: Array<User> = await response.json()
        return Promise.resolve(users)
      } else {
        const error: ErrorModel = await response.json()
        return Promise.reject(new Error(error.error))
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async removeUserById (userId: string): Promise<User> {
    try {
      const token = await this.localDataSource.getLastToken()
      const response = await this.service.removeUserById(userId, token)
      if (response.ok) {
        const user: User = await response.json()
        return Promise.resolve(user)
      } else {
        const error: ErrorModel = await response.json()
        return Promise.reject(new Error(error.error))
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async updateUserById (userId: string, param: UpdateUserParam): Promise<User> {
    try {
      const token = await this.localDataSource.getLastToken()
      const response = await this.service.updateUserById(userId, JSON.stringify(param), token)
      if (response.ok) {
        const user: User = await response.json()
        return Promise.resolve(user)
      } else {
        const error: ErrorModel = await response.json()
        return Promise.reject(new Error(error.error))
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async updateUserInfo (param: UpdateUserParam): Promise<User> {
    try {
      const token = await this.localDataSource.getLastToken()
      const response = await this.service.updateUserInfo(JSON.stringify(param), token)
      if (response.ok) {
        const user: User = await response.json()
        return Promise.resolve(user)
      } else {
        const error: ErrorModel = await response.json()
        return Promise.reject(new Error(error.error))
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
