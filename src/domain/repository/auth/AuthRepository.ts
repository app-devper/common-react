import Login from '../../entity/auth/Login';
import LoginParam from "../../entity/auth/LoginParam";

export default interface AuthRepository {

  login(param: LoginParam): Promise<Login>;

  getRole(): Promise<string>;

  keepAlive(): Promise<Login>;
}
