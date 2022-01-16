import UserRepository from "../../../domain/repository/user/UserRepository";
import ChangePasswordParam from "../../../domain/entity/user/ChangePasswordParam";
import User from "../../../domain/entity/user/User";
import ClientService from "../../datasource/network/ClientService";
import LocalDataSource from "../../datasource/local/LocalDatasource";
import ErrorModel from "../../../domain/entity/error/ErrorModel";
import CreateUserParam from "../../../domain/entity/user/CreateUserParam";
import UpdateUserParam from "../../../domain/entity/user/UpdateUserParam";

export default class UserRepositoryImpl implements UserRepository {

  private service: ClientService
  private localDataSource: LocalDataSource

  constructor(service: ClientService, localDataSource: LocalDataSource) {
    this.service = service
    this.localDataSource = localDataSource
  }

  createUser(param: CreateUserParam): Promise<User> {
    return new Promise(async (resolve, reject) => {
      try {
        const token = await this.localDataSource.getLastToken()
        const response = await this.service.createUser(JSON.stringify(param), token)
        if (response.ok) {
          const user: User = await response.json()
          resolve(user)
        } else {
          const error: ErrorModel = await response.json()
          reject(new Error(error.error))
        }
      } catch (error) {
        reject(error)
      }
    });
  }

  changePassword(param: ChangePasswordParam): Promise<User> {
    return new Promise(async (resolve, reject) => {
      try {
        const token = await this.localDataSource.getLastToken()
        const response = await this.service.changePassword(JSON.stringify(param), token)
        if (response.ok) {
          const user: User = await response.json()
          resolve(user)
        } else {
          const error: ErrorModel = await response.json()
          reject(new Error(error.error))
        }
      } catch (error) {
        reject(error)
      }
    });
  }

  getUserById(userId: string): Promise<User> {
    return new Promise(async (resolve, reject) => {
      try {
        const token = await this.localDataSource.getLastToken()
        const response = await this.service.getUserById(userId, token)
        if (response.ok) {
          const user: User = await response.json()
          resolve(user)
        } else {
          const error: ErrorModel = await response.json()
          reject(new Error(error.error))
        }
      } catch (error) {
        reject(error)
      }
    });
  }

  getUserInfo(): Promise<User> {
    return new Promise(async (resolve, reject) => {
      try {
        const token = await this.localDataSource.getLastToken()
        const response = await this.service.getUserInfo(token)
        if (response.ok) {
          const user: User = await response.json()
          resolve(user)
        } else {
          const error: ErrorModel = await response.json()
          reject(new Error(error.error))
        }
      } catch (error) {
        reject(error)
      }
    });
  }

  getUsers(): Promise<Array<User>> {
    return new Promise(async (resolve, reject) => {
      try {
        const token = await this.localDataSource.getLastToken()
        const response = await this.service.getUserInfo(token)
        if (response.ok) {
          const users: Array<User> = await response.json()
          resolve(users)
        } else {
          const error: ErrorModel = await response.json()
          reject(new Error(error.error))
        }
      } catch (error) {
        reject(error)
      }
    });
  }

  removeUserById(userId: string): Promise<User> {
    return new Promise(async (resolve, reject) => {
      try {
        const token = await this.localDataSource.getLastToken()
        const response = await this.service.removeUserById(userId, token)
        if (response.ok) {
          const user: User = await response.json()
          resolve(user)
        } else {
          const error: ErrorModel = await response.json()
          reject(new Error(error.error))
        }
      } catch (error) {
        reject(error)
      }
    });
  }

  updateUserById(userId: string, param: UpdateUserParam): Promise<User> {
    return new Promise(async (resolve, reject) => {
      try {
        const token = await this.localDataSource.getLastToken()
        const response = await this.service.updateUserById(userId, JSON.stringify(param), token)
        if (response.ok) {
          const user: User = await response.json()
          resolve(user)
        } else {
          const error: ErrorModel = await response.json()
          reject(new Error(error.error))
        }
      } catch (error) {
        reject(error)
      }
    });
  }

  updateUserInfo(param: UpdateUserParam): Promise<User> {
    return new Promise(async (resolve, reject) => {
      try {
        const token = await this.localDataSource.getLastToken()
        const response = await this.service.updateUserInfo(JSON.stringify(param), token)
        if (response.ok) {
          const user: User = await response.json()
          resolve(user)
        } else {
          const error: ErrorModel = await response.json()
          reject(new Error(error.error))
        }
      } catch (error) {
        reject(error)
      }
    });
  }

}
