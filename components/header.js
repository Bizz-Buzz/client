import React from 'react'

module.exports = (title, subtitle, backRoute, dispatch) => {
  function goBack() {
    dispatch({type: "CHANGE_ROUTE", payload: backRoute})
  }
  return (
    <div className="header">
      <h1 className="greeting"><span><button onClick={()=>goBack()}>Back</button></span>{title}</h1>
      <div><p className="greeting" id="greetingName">{subtitle}</p></div>
    </div>
  )
}
