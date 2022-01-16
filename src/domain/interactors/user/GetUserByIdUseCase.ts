import UserRepository from '../../repository/user/UserRepository';
import User from "../../entity/user/User";

export default class GetUserByIdUseCase {
  private userRepository: UserRepository;

  public constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async getUserById(userId: string): Promise<User> {
    return await this.userRepository.getUserById(userId);
  }
}
