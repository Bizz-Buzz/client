import React from 'react'
import signupService from '../services/signup'

module.exports = ({ state, dispatch }) => {
  const savePassword = (e) => dispatch({type: 'UPDATE_SIGNUP_DETAILS', payload: {change: 'password', value: e.target.value}})
  const saveConfirmPassword = (e) => dispatch({type: 'UPDATE_SIGNUP_DETAILS', payload: {change: 'confirmPassword', value: e.target.value}})
  const saveEmail = (e) => dispatch({type: 'UPDATE_SIGNUP_DETAILS', payload: {change: 'email', value: e.target.value}})
  const saveFirstName = (e) => dispatch({type: 'UPDATE_SIGNUP_DETAILS', payload: {change: 'first_name', value: e.target.value}})
  const saveLastName = (e) => dispatch({type: 'UPDATE_SIGNUP_DETAILS', payload: {change: 'last_name', value: e.target.value}})
  const authorizeSignUp = (e) => {
    e.preventDefault()
    signupService(state.signupDetails, dispatch)
  }
  return (
    <div className='signUp'>
    <h1>Create Account</h1>
      <form>
        {state.authError ? <h1>{state.authError}</h1> : ""}
        <input onChange={saveEmail} type='text' placeholder='Email' />
        <input onChange={savePassword} type='password' placeholder='Password' />
        <input onChange={saveConfirmPassword} type='password' placeholder='Confirm Password' />
        <input onChange={saveFirstName} type='text' placeholder="First Name" />
        <input onChange={saveLastName} type="text" placeholder="Last Name" />
        <button className='buttons' onClick={authorizeSignUp} type='submit'>Sign Up</button>
      </form>
      <button className='buttons' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/'})} type='submit'>Cancel</button>
    </div>
  )
}
