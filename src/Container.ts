import ClientService from "./data/datasource/network/ClientService";
import LocalDataSourceImpl from "./data/datasource/local/LocalDataSourceImpl";
import AuthRepositoryImpl from "./data/repository/auth/AuthRepositoryImpl";
import UserRepositoryImpl from "./data/repository/user/UserRepositoryImpl";

import AuthRepository from "./domain/repository/auth/AuthRepository";
import UserRepository from "./domain/repository/user/UserRepository";

import { baseUrl } from "./Const";
import AuthHolder from "./domain/entity/auth/AuthHolder";

export default class Container {

  private clientService = new ClientService(baseUrl)
  private localDataSource = new LocalDataSourceImpl()
  private authHolder = new AuthHolder()

  getAuthHolder(): AuthHolder {
    return this.authHolder
  }

  getAuthRepository(): AuthRepository {
    return new AuthRepositoryImpl(this.clientService, this.localDataSource)
  }

  getUserRepository(): UserRepository {
    return new UserRepositoryImpl(this.clientService, this.localDataSource)
  }

}
