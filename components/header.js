import React from 'react'

module.exports = (title, subtitle, backRoute, dispatch) => {
  function goBack() {
    dispatch({type: "CHANGE_ROUTE", payload: backRoute})
  }
  return (
    <div className="header">
      <span><button className="backIcon" onClick={()=>goBack()}><img className="backIcon" src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-128.png' title="Back" /></button></span>
      <div>
      <p className="greeting">{title}</p>
      <p className="greeting" id="greetingName">{subtitle}</p>
      </div>
    </div>
  )
}
