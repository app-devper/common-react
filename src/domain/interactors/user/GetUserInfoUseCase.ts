import UserRepository from '../../repository/UserRepository'
import User from '../../entity/user/User'

export default class GetUserInfoUseCase {
  private userRepository: UserRepository;

  public constructor (userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  public getUserInfo (): Promise<User> {
    return this.userRepository.getUserInfo()
  }
}
