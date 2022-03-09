import ClientService from './data/datasource/network/ClientService'
import LocalDataSourceImpl from './data/datasource/local/LocalDataSourceImpl'
import AuthRepositoryImpl from './data/repository/AuthRepositoryImpl'
import UserRepositoryImpl from './data/repository/UserRepositoryImpl'

import { baseUrl } from './Const'
import AuthHolder from './domain/entity/auth/AuthHolder'
import LoginUseCase from './domain/interactors/auth/LoginUseCase'
import AuthRepository from './domain/repository/AuthRepository'
import UserRepository from './domain/repository/UserRepository'

export default class Container {
  private clientService = new ClientService(baseUrl)
  private localDataSource = new LocalDataSourceImpl()
  private authHolder = new AuthHolder()

  getAuthHolder (): AuthHolder {
    return this.authHolder
  }

  getAuthRepository (): AuthRepository {
    return new AuthRepositoryImpl(this.clientService, this.localDataSource)
  }

  getUserRepository (): UserRepository {
    return new UserRepositoryImpl(this.clientService, this.localDataSource)
  }

  // UseCase
  getLoginUseCase (): LoginUseCase {
    return new LoginUseCase(this.getAuthRepository())
  }
}
