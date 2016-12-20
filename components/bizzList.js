import React from 'react'

module.exports = ({state, dispatch}) => {

  return (
    <div>Hello {state.user.first_name} {state.user.last_name}</div>
  )
}
