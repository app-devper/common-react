import UserRepository from '../../repository/user/UserRepository';
import User from "../../entity/user/User";

export default class GetUserInfoUseCase {
  private userRepository: UserRepository;

  public constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async getUserInfo(): Promise<User> {
    return await this.userRepository.getUserInfo();
  }
}
