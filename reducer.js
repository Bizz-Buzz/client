const clone = require('clone')

module.exports = (state, action) => {
  var newState = clone(state)
  const {payload, type} = action
  switch (type) {
    case 'UPDATE_LOGIN_DETAILS':
      newState.loginDetails[payload.change] = payload.value
      return newState
    case 'UPDATE_SIGNUP_DETAILS':
      newState.signupDetails[payload.change] = payload.value
      console.log(newState.signupDetails);
      return newState
    case 'LOGIN_SUCCESS':
      newState.user = payload
      newState.route = '/bizzList'
      return newState
    case 'CHANGE_ROUTE':
      newState.route = payload
      return newState
    default:
      return newState
  }
}
