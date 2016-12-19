const clone = require('clone')

module.exports = (state, action) => {
  var newState = clone(state)
  const {payload, type} = action
  switch (type) {
    case '':
      return newState
    default:
      return newState
  }
}
