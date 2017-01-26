import React from 'react'

module.exports = (welcome, name, backRoute, dispatch) => {
  function goBack() {
    dispatch({type: "CHANGE_ROUTE", payload: backRoute})
  }
  return (
    <div className="header">
      <span><button onClick={()=>goBack()}><img id="backIcon" src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-128.png' title="Back" /></button></span>
      <div>
      <p className="greeting">{welcome}</p>
      <p className="greeting" id="greetingName">{name}</p>
      </div>
    </div>
  )
}
