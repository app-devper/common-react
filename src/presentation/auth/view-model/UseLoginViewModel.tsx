import { useState } from 'react'
import LoginUseCase from '../../../domain/interactors/auth/LoginUseCase'

const useLoginViewModel = (loginUseCase: LoginUseCase) => {
  const [isSignInButtonVisible, setSignInButtonVisible] = useState(true)
  const [isSignOutButtonVisible, setSignOutButtonVisible] = useState(false)
  const [usernameQuery, setUsernameQuery] = useState('')
  const [passwordQuery, setPasswordQuery] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [authStatus, setAuthStatus] = useState('is not authorized')
  const [isAuthStatusPositive, setAuthStatusPositive] = useState(false)
  const [isShowError, setShowError] = useState(false)

  const onUsernameQueryChanged = (username: string): void => {
    setUsernameQuery(username)
  }

  const onPasswordQueryChanged = (password: string): void => {
    setPasswordQuery(password)
  }

  const validateLoginForm = (): boolean => {
    if (!usernameQuery) {
      setErrorMessage('Username cannot be empty')
      setShowError(true)
      return false
    }
    if (errorMessage === 'Username cannot be empty') {
      setShowError(false)
      setErrorMessage('')
    }

    if (!passwordQuery) {
      setErrorMessage('Password cannot be empty')
      setShowError(true)
      return false
    }
    if (errorMessage === 'Password cannot be empty') {
      setShowError(false)
      setErrorMessage('')
    }
    return true
  }

  const onClickSignIn = (): void => {
    if (!validateLoginForm()) {
      return
    }

    loginUseCase.loginUser({
      username: usernameQuery,
      password: passwordQuery
    }).then((_) => {
      setAuthStatus('authorized')
      setAuthStatusPositive(true)
      setSignInButtonVisible(false)
      setSignOutButtonVisible(true)
    }).catch((e) => {
      setAuthStatus('is not authorized')
      setAuthStatusPositive(false)
      setErrorMessage(e.message)
      setShowError(true)
    })

    setErrorMessage('')
    setShowError(false)
  }

  const onClickSignOut = (): void => {
    setSignInButtonVisible(true)
    setSignOutButtonVisible(false)
    setAuthStatus('is not authorized')
    setAuthStatusPositive(false)
  }

  return {
    authStatus,
    isAuthStatusPositive,
    isShowError,
    errorMessage,
    usernameQuery,
    passwordQuery,
    isSignInButtonVisible,
    isSignOutButtonVisible,
    onUsernameQueryChanged,
    onPasswordQueryChanged,
    onClickSignIn,
    onClickSignOut
  }
}

export default useLoginViewModel
