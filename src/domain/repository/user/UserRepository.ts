import User from "../../entity/user/User";
import ChangePasswordParam from "../../entity/user/ChangePasswordParam";

export default interface UserRepository {

  getUserInfo(): Promise<User>

  getUsers(): Promise<Array<User>>

  getUserById(userId: string): Promise<User>

  changePassword(param: ChangePasswordParam): Promise<User>
}
