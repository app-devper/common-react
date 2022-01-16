import UserRepository from '../../repository/user/UserRepository';
import User from "../../entity/user/User";

export default class RemoveUserByIdUseCase {
  private userRepository: UserRepository;

  public constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async removeUserById(userId: string): Promise<User> {
    return await this.userRepository.removeUserById(userId);
  }
}
