import React from 'react'

module.exports = (state, dispatch) => {
  function goBack() {
    dispatch({type: "CHANGE_ROUTE", payload: backRoute})
  }
  function changeBizzView(view) {
    console.log(view);
  }
  return (
    <div className="footer">
        <p>
          <span className="BuzzMenu" onClick={() => changeBizzView('buzzView')}>Buzz</span>
          -  <span className="ColoneyMenu" onClick={() => changeBizzView('memberView')}>Coloney</span>
          -  <span className="CalenderMenu" onClick={() => changeBizzView('calenderView')}>Calender</span>
          -  <span className="SettingsMenu" onClick={() => changeBizzView('settingsView')}>Settings</span>
        </p>
    </div>
  )
}
