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
          <span className="BuzzMenu" onClick={() => changeBizzView('buzzView')}>Buzz</span>
          -  <span className="ColoneyMenu" onClick={() => changeBizzView('coloneyView')}>Coloney</span>
          -  <span className="CalenderMenu" onClick={() => changeBizzView('calenderView')}>Calender</span>
          -  <span className="SettingsMenu" onClick={() => LoadSettings(state, dispatch)}>Settings</span>
        </p>
    </div>
  )
}
