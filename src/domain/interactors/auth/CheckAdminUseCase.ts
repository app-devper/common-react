import AuthRepository from '../../repository/auth/AuthRepository';

export default class CheckAdminUseCase {
  private authRepository: AuthRepository;

  public constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  public async checkAdmin(): Promise<boolean> {
    const role = await this.authRepository.getRole();
    return Promise.resolve(role == "ADMIN")
  }
}
