import React from 'react'
import ViewHandler from './bizzViews/viewHandler'
import header from './header'
import footer from './footer'

module.exports = ({state, dispatch}) => {
  return (
    <div className="bizz">
      {header(state.bizz.bizz_name, state.bizz.bizz_members + ' members', '/bizzList', dispatch)}
      {ViewHandler(state,dispatch)}
      {footer(state, dispatch)}
    </div>
  )
}


// <h1 className="thing1">{state.bizz.bizz_name}</h1>
// <h4 className="thing2">{state.bizz.bizz_members} members</h4>
