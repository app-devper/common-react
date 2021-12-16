import AuthRepository from '../../repository/auth/AuthRepository';
import AuthHolder from '../../entity/auth/AuthHolder';
import LoginParam from "../../entity/auth/LoginParam";

export default class LoginUseCase {
  private authRepository: AuthRepository;
  private authHolder: AuthHolder;

  public constructor(authRepository: AuthRepository, authHolder: AuthHolder) {
    this.authRepository = authRepository;
    this.authHolder = authHolder;
  }

  public async loginUser(param: LoginParam): Promise<void> {
    const authResult = await this.authRepository.login(param);
    this.authHolder.onSignedIn(authResult.accessToken);
  }
}
