import AuthRepository from '../../../domain/repository/auth/AuthRepository';
import Login from '../../../domain/entity/auth/Login';

import ClientService from "../../datasource/network/ClientService";
import LoginParam from "../../../domain/entity/auth/LoginParam";
import { LocalDataSource } from "../../datasource/local/LocalDatasource";
import ErrorModel from "../../../domain/entity/error/ErrorModel";

export default class AuthRepositoryImpl implements AuthRepository {

  private service: ClientService
  private localDataSource: LocalDataSource

  constructor(service: ClientService, localDataSource: LocalDataSource) {
    this.service = service
    this.localDataSource = localDataSource
  }

  login(param: LoginParam): Promise<Login> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.service.login({
          username: param.username,
          password: param.password
        })
        if (response.ok) {
          const login: Login = await response.json()
          await this.localDataSource.cacheToken(login.accessToken)
          resolve(login)
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
