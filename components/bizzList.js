import React from 'react'
import viewBizz from '../services/viewBizz'


module.exports = ({state, dispatch}) => {
  function BizzList() {
    console.log("bizz render state", {state});
    return state.bizzList.map((bizz)=>{
      return <div onClick={() => viewBizz(bizz.bizz_name, dispatch)}>{bizz.bizz_name}</div>
    })
  }
  return (
    <div className="bizzList">
      <div>Welcome {state.user.first_name} {state.user.last_name}</div>
      <h3>{state.bizzList.length != 0
        ? "Select a Bizz"
        : "You haven't joined a Bizz"
      }</h3>
      <div>{BizzList()}</div>
    </div>
  )
}
