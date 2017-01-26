import React from 'react'
import LoadSettings from '../services/loadSettings'

module.exports = (state, dispatch) => {
  function goBack() {
    dispatch({type: "CHANGE_ROUTE", payload: backRoute})
  }
  function changeBizzView(view) {
    dispatch({type: 'CHANGE_BIZZ_VIEW', payload: view})
  }
  return (
    <div className="footer">
        <p>
          <span className="footerItem" onClick={() => changeBizzView('buzzView')}>Buzz</span>
          <span className="footerItem" onClick={() => changeBizzView('coloneyView')}>Coloney</span>
          <span className="footerItem" onClick={() => changeBizzView('calenderView')}>Calender</span>
          <span className="footerItem" onClick={() => LoadSettings(state, dispatch)}>Settings</span>
        </p>
    </div>
  )
}
