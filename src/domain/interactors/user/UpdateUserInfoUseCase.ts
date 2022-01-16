import UserRepository from '../../repository/user/UserRepository';
import User from "../../entity/user/User";
import UpdateUserParam from "../../entity/user/UpdateUserParam";

export default class UpdateUserInfoUseCase {
  private userRepository: UserRepository;

  public constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async updateUserInfo(param: UpdateUserParam): Promise<User> {
    return await this.userRepository.updateUserInfo(param)
  }
}
