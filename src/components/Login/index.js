import {useState} from 'react'
import Cookies from 'js-cookie'
import {
  LoginContainer,
  LoginForm,
  InputField,
  Label,
  ErrorMessage,
} from './style'
import './index.css'

import NextContext from '../../context/NextContext'

const Login = () => {
  const [username, changeUserName] = useState('')
  const [password, changePassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const onChangeUserName = event => {
    changeUserName(event.target.value)
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  const onChangPassword = event => {
    changePassword(event.target.value)
  }

  const onSubmitSuccess = jwtToken => {
    console.log(jwtToken)
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    changePassword('')
    changeUserName('')
    setShowErrorMessage(false)
  }

  const onSubmitFailure = errorMsg => {
    console.log(errorMsg)
    setErrorMessage(errorMsg)
    setShowErrorMessage(true)
    changePassword('')
    changeUserName('')
  }

  const onSubmitForm = async event => {
    event.preventDefault()
    // console.log('submit form triggered')
    // console.log(username)
    // console.log(password)
    const userDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    // console.log(data)
    if (response.ok) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitFailure(data.error_msg)
    }
  }

  return (
    <NextContext.Consumer>
      {value => {
        const {isLightTheme} = value

        return (
          <LoginContainer theme={isLightTheme}>
            <LoginForm onSubmit={onSubmitForm}>
              {isLightTheme === true ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  className="image"
                  alt="nxt watch logo"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  className="image"
                  alt="nxt watch logo"
                />
              )}
              <InputField>
                <Label htmlFor="name" theme={isLightTheme}>
                  USER NAME
                </Label>
                <input
                  type="text"
                  value={username}
                  id="name"
                  placeholder="Username"
                  onChange={onChangeUserName}
                />
              </InputField>
              <InputField>
                <Label htmlFor="password" theme={isLightTheme}>
                  USER NAME
                </Label>
                <input
                  id="password"
                  value={password}
                  type={showPassword ? 'text' : 'password'}
                  onChange={onChangPassword}
                  placeholder="Password"
                />
              </InputField>
              <Label theme={isLightTheme}>
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={handleTogglePassword}
                />
                Show Password
              </Label>
              <button className="login-button" type="submit">
                Login
              </button>
              {showErrorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            </LoginForm>
          </LoginContainer>
        )
      }}
    </NextContext.Consumer>
  )
}

export default Login
