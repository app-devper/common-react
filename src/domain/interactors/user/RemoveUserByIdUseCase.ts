import UserRepository from '../../repository/UserRepository'
import User from '../../entity/user/User'

export default class RemoveUserByIdUseCase {
  private userRepository: UserRepository;

  public constructor (userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  public removeUserById (userId: string): Promise<User> {
    return this.userRepository.removeUserById(userId)
  }
}
