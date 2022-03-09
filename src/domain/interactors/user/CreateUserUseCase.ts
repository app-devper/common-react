import UserRepository from '../../repository/UserRepository'
import User from '../../entity/user/User'
import CreateUserParam from '../../entity/user/CreateUserParam'

export default class CreateUserUseCase {
  private userRepository: UserRepository;

  public constructor (userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  public async createUser (param: CreateUserParam): Promise<User> {
    return this.userRepository.createUser(param)
  }
}
