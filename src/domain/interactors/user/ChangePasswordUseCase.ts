import UserRepository from '../../repository/user/UserRepository';
import User from "../../entity/user/User";
import ChangePasswordParam from "../../entity/user/ChangePasswordParam";

export default class ChangePasswordUseCase {
  private userRepository: UserRepository;

  public constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async changePassword(param: ChangePasswordParam): Promise<User> {
    return await this.userRepository.changePassword(param)
  }
}
