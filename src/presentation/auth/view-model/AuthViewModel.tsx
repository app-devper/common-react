import BaseView from '../../../core/base/BaseView';
import LoginUseCase from '../../../domain/interactors/auth/LoginUseCase';
import AuthHolder from '../../../domain/entity/auth/AuthHolder';
import AuthListener from '../../../domain/entity/auth/AuthListener';
import BaseViewModel from "../../../core/base/BaseViewModel";

export default class AuthViewModel implements BaseViewModel, AuthListener {
  public usernameQuery: string;
  public passwordQuery: string;
  public isSignInButtonVisible: boolean;
  public isSignOutButtonVisible: boolean;

  public isShowError: boolean;
  public errorMessage: string;

  public authStatus: string;
  public isAuthStatusPositive: boolean;

  private baseView?: BaseView;
  private loginUseCase: LoginUseCase;
  private authHolder: AuthHolder;

  public constructor(loginUseCase: LoginUseCase, authHolder: AuthHolder) {
    this.usernameQuery = '';
    this.passwordQuery = '';
    this.isSignInButtonVisible = true;
    this.isSignOutButtonVisible = false;

    this.isShowError = false;
    this.errorMessage = '';

    this.authStatus = 'is not authorized';
    this.isAuthStatusPositive = false;

    this.loginUseCase = loginUseCase;
    this.authHolder = authHolder;

    this.authHolder.addAuthListener(this);
  }

  public attachView = (baseView: BaseView): void => {
    this.baseView = baseView;
  };

  public detachView = (): void => {
    this.baseView = undefined;
  };

  public onAuthChanged = (): void => {
    if (this.authHolder.isUserAuthorized()) {
      this.isSignInButtonVisible = false;
      this.isSignOutButtonVisible = true;
      this.authStatus = 'authorized';
      this.isAuthStatusPositive = true;
    } else {
      this.isSignInButtonVisible = true;
      this.isSignOutButtonVisible = false;
      this.authStatus = 'is not autorized';
      this.isAuthStatusPositive = false;
    }

    this.notifyViewAboutChanges();
  };

  public onEmailQueryChanged = (loginQuery: string): void => {
    this.usernameQuery = loginQuery;
    this.notifyViewAboutChanges();
  };

  public onPasswordQueryChanged = (passwordQuery: string): void => {
    this.passwordQuery = passwordQuery;
    this.notifyViewAboutChanges();
  };

  public onClickSignIn = (): void => {
    if (!this.validateLoginForm()) {
      this.notifyViewAboutChanges();
      return;
    }

    this.loginUseCase.loginUser({
      username: this.usernameQuery,
      password: this.passwordQuery
    }).catch(e => {
      this.errorMessage = e.message;
      this.isShowError = true;
      this.notifyViewAboutChanges();
    })

    this.isShowError = false;
    this.errorMessage = '';
    this.notifyViewAboutChanges();
  };

  public onClickSignOut = (): void => {
    this.authHolder.onSignedOut();
  };

  private validateLoginForm = (): boolean => {
    if (!this.usernameQuery) {
      this.isShowError = true;
      this.errorMessage = 'Username cannot be empty';
      return false;
    }
    if (this.errorMessage === 'Username cannot be empty') {
      this.isShowError = false;
      this.errorMessage = '';
    }

    if (!this.passwordQuery) {
      this.isShowError = true;
      this.errorMessage = 'Password cannot be empty';
      return false;
    }
    if (this.errorMessage === 'Password cannot be empty') {
      this.isShowError = false;
      this.errorMessage = '';
    }

    return true;
  }

  private notifyViewAboutChanges = (): void => {
    if (this.baseView) {
      this.baseView.onViewModelChanged();
    }
  };
}
