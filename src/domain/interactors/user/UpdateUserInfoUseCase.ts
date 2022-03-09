import UserRepository from '../../repository/UserRepository'
import User from '../../entity/user/User'
import UpdateUserParam from '../../entity/user/UpdateUserParam'

export default class UpdateUserInfoUseCase {
  private userRepository: UserRepository;

  public constructor (userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  public updateUserInfo (param: UpdateUserParam): Promise<User> {
    return this.userRepository.updateUserInfo(param)
  }
}
