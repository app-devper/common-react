import React from 'react'
import './auth-component.css'
import Container from '../../../Container'
import useLoginViewModel from '../view-model/UseLoginViewModel'

export type LoginComponentProps = {
  container: Container
}

export function LoginComponent (props: LoginComponentProps) {
  const {
    isAuthStatusPositive,
    authStatus,
    isShowError,
    errorMessage,
    passwordQuery,
    usernameQuery,
    isSignInButtonVisible,
    isSignOutButtonVisible,
    onEmailQueryChanged,
    onPasswordQueryChanged,
    onClickSignIn,
    onClickSignOut
  } = useLoginViewModel(props.container.getLoginUseCase())

  return (
    <div className="row flex-grow-1 d-flex justify-content-center align-items-center">
      <div className="auth-container col bg-white border rounded-lg py-4 px-5">
        <div className="row mt-2 mb-4">
          Status:&nbsp;
          <span className={`${isAuthStatusPositive ? 'text-success' : 'text-danger'}`}>
            {authStatus}
          </span>
        </div>

        <div className="row mt-2">
          <input
            type="text"
            placeholder="username"
            onChange={(e: React.FormEvent<HTMLInputElement>): void => {
              onEmailQueryChanged(e.currentTarget.value)
            }}
            value={usernameQuery}
            className="form-control"
          />
        </div>
        <div className="row mt-2">
          <input
            type="password"
            placeholder="password"
            onChange={(e: React.FormEvent<HTMLInputElement>): void => {
              onPasswordQueryChanged(e.currentTarget.value)
            }}
            value={passwordQuery}
            className="form-control"
          />
        </div>

        {isShowError && (
          <div className="row my-3 text-danger justify-content-center">{errorMessage}</div>
        )}

        {isSignInButtonVisible && (
          <div className="row mt-4">
            <button
              type="button"
              className="col btn btn-primary"
              onClick={(): void => onClickSignIn()}
            >
              Sign in
            </button>
          </div>
        )}

        {isSignOutButtonVisible && (
          <div className="row mt-4">
            <button
              type="button"
              className="col btn btn-primary"
              onClick={(): void => onClickSignOut()}
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
