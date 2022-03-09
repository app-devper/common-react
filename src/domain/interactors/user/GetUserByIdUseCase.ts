import UserRepository from '../../repository/UserRepository'
import User from '../../entity/user/User'

export default class GetUserByIdUseCase {
  private userRepository: UserRepository;

  public constructor (userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  public getUserById (userId: string): Promise<User> {
    return this.userRepository.getUserById(userId)
  }
}
