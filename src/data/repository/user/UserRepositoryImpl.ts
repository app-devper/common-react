import UserRepository from "../../../domain/repository/user/UserRepository";
import ChangePasswordParam from "../../../domain/entity/user/ChangePasswordParam";
import User from "../../../domain/entity/user/User";
import ClientService from "../../datasource/network/ClientService";
import { LocalDataSource } from "../../datasource/local/LocalDatasource";
import ErrorModel from "../../../domain/entity/error/ErrorModel";

export default class UserRepositoryImpl implements UserRepository {

  private service: ClientService
  private localDataSource: LocalDataSource

  constructor(service: ClientService, localDataSource: LocalDataSource) {
    this.service = service
    this.localDataSource = localDataSource
  }

  changePassword(param: ChangePasswordParam): Promise<User> {
    return new Promise(async (resolve, reject) => {
      try {
        const token = await this.localDataSource.getLastToken()
        const response = await this.service.changePassword({
          oldPassword: param.oldPassword,
          newPassword: param.newPassword,
        }, token)
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

}
