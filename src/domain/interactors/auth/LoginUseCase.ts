import AuthRepository from '../../repository/AuthRepository'
import LoginParam from '../../entity/auth/LoginParam'
import Login from '../../entity/auth/Login'

export default class LoginUseCase {
  private authRepository: AuthRepository

  public constructor (authRepository: AuthRepository) {
    this.authRepository = authRepository
  }

  public async loginUser (param: LoginParam): Promise<Login> {
    if (!param.username || !param.password) {
      return Promise.reject(new Error('Params invalid'))
    }
    return this.authRepository.login(param)
  }
}
