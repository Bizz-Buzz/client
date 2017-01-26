import React from 'react'
import BuzzList from './buzzList'
import Calender from './calender'
import Coloney from './coloney'
import BizzSettings from './bizzSettings'

module.exports = (state, dispatch) => {
  switch (state.bizz.bizzView) {
    case 'buzzView':
      return <div className="content">{BuzzList(state, dispatch)}</div>
    case 'calenderView':
      return <div className="content">{Calender(state, dispatch)}</div>
    case 'coloneyView':
      return <div className="content">{Coloney(state, dispatch)}</div>
    case 'bizzSettingsView':
      return <div className="content">{BizzSettings(state, dispatch)}</div>
    default:
    console.log("handling view");
      return <div className="content">{BuzzList(state, dispatch)}</div>
  }
}
