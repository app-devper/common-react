import AuthRepository from '../../repository/auth/AuthRepository';
import AuthHolder from '../../entity/auth/AuthHolder';

export default class KeepAliveUseCase {
  private authRepository: AuthRepository;
  private authHolder: AuthHolder;

  public constructor(authRepository: AuthRepository, authHolder: AuthHolder) {
    this.authRepository = authRepository;
    this.authHolder = authHolder;
  }

  public async keepAlive(): Promise<void> {
    const authResult = await this.authRepository.keepAlive();
    this.authHolder.onSignedIn(authResult.accessToken);
  }
}
