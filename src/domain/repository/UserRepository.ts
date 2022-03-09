import User from '../entity/user/User'
import ChangePasswordParam from '../entity/user/ChangePasswordParam'
import CreateUserParam from '../entity/user/CreateUserParam'
import UpdateUserParam from '../entity/user/UpdateUserParam'

export default interface UserRepository {

  createUser(param: CreateUserParam): Promise<User>

  getUserInfo(): Promise<User>

  updateUserInfo(param: UpdateUserParam): Promise<User>

  getUsers(): Promise<Array<User>>

  getUserById(userId: string): Promise<User>

  updateUserById(userId: string, param: UpdateUserParam): Promise<User>

  changePassword(param: ChangePasswordParam): Promise<User>

  removeUserById(userId: string): Promise<User>

}
