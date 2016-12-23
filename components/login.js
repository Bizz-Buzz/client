import React from 'react'
import loginService from '../services/login'

module.exports = ({state, dispatch}) => {
  const goToSignUp = () => dispatch({type: 'CHANGE_ROUTE', payload: '/signUp'})
  const saveEmail = (e) => dispatch({type: 'UPDATE_LOGIN_DETAILS', payload: {change: 'username', value: e.target.value}})
  const savePassword = (e) => dispatch({type: 'UPDATE_LOGIN_DETAILS', payload: {change: 'password', value: e.target.value}})
  const loginButton = (e) => {
    e.preventDefault()
    dispatch({type: 'CHANGE_ROUTE', payload: '/loading'})
    loginService(state, dispatch)
  }
  return (
    <div>
      <h1>Login</h1>
      <form>
        {state.authError ? <h1>{state.authError}</h1> : ""}
        <input onChange={saveEmail} type="text" placeholder="Email Address" />
        <input onChange={savePassword} type="password" placeholder="Password" />
        <button className="buttons" onClick={loginButton} type="submit">Log in</button>
      </form>
      <button className='buttons' onClick={goToSignUp}>Create Account</button>
    </div>
  )
}
