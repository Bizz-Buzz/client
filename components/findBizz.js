import React from 'react'
import RequestBizz from '../services/requestBizz'

module.exports = ({state, dispatch}) => {
  console.log({state});
  function renderBizz(bizz) {
    return <div className="bizzListItem" onClick={() => requestBizz(bizz, dispatch)}>
      <h2>{bizz.bizz_name}</h2>
      <h4>{bizz.bizz_members} members</h4>
    </div>
  }
  function BizzList() {
    return state.allBizzList.map((bizz) => {
      return renderBizz(bizz)
    })
  }
  return (
    <div className="bizzList">
      <div><p className="greeting">Select a Bizz to request to join it</p></div>
      {BizzList()}
    </div>
  )
}
