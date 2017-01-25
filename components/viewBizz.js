import React from 'react'
import ViewHandler from './bizzViews/viewHandler'

module.exports = ({state, dispatch}) => {
  return (
    <div className="bizz">
      <h1 className="thing1">{state.bizz.bizz_name}</h1>
      <h4 className="thing2">{state.bizz.bizz_members} members</h4>
      {ViewHandler(state,dispatch)}
    </div>
  )
}
