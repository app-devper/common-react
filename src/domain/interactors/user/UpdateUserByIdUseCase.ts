import UserRepository from '../../repository/UserRepository'
import User from '../../entity/user/User'
import UpdateUserParam from '../../entity/user/UpdateUserParam'

export default class UpdateUserByIdUseCase {
  private userRepository: UserRepository;

  public constructor (userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  public updateUserInfo (userId: string, param: UpdateUserParam): Promise<User> {
    return this.userRepository.updateUserById(userId, param)
  }
}
