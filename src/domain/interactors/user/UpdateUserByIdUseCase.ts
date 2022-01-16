import UserRepository from '../../repository/user/UserRepository';
import User from "../../entity/user/User";
import UpdateUserParam from "../../entity/user/UpdateUserParam";

export default class UpdateUserByIdUseCase {
  private userRepository: UserRepository;

  public constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async updateUserInfo(userId: string, param: UpdateUserParam): Promise<User> {
    return await this.userRepository.updateUserById(userId, param)
  }
}
