const clone = require('clone')

module.exports = (state, action) => {
  var newState = clone(state)
  const {payload, type} = action
  switch (type) {
    case 'UPDATE_LOGIN_DETAILS':
      newState.loginDetails[payload.change] = payload.value
      console.log(newState.loginDetails);
      return newState
    case 'LOGIN_SUCCESS':
      newState.user = payload
      newState.route = '/bizzList'
      return newState
    default:
      return newState
  }
}
