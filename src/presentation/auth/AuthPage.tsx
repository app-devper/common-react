import React from 'react';

import AuthComponent from './view/AuthComponent';
import AuthViewModel from './view-model/AuthViewModel';

import LoginUseCase from "../../domain/interactors/auth/LoginUseCase";
import Container from "../../Container";

export interface AuthPageProps {
  container: Container
}

function AuthPage(prop: AuthPageProps): JSX.Element {
  const loginUseCase = new LoginUseCase(prop.container.getAuthRepository(), prop.container.getAuthHolder());
  const authViewModel = new AuthViewModel(loginUseCase, prop.container.getAuthHolder());
  return (
    <AuthComponent authViewModel={authViewModel}/>
  );
}

export default AuthPage;
