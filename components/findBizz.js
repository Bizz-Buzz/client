import React from 'react'
import RequestBizz from '../services/requestBizz'
import header from './header'

module.exports = ({state, dispatch}) => {
  console.log({state});
  function renderBizz(bizz) {
    return <div className="bizzListItem" onClick={() => RequestBizz(bizz.bizz_id, state, dispatch)}>
      <h2>{bizz.bizz_name}</h2>
      <h4>{state.followRequests.includes(bizz.bizz_id)
        ? "Request Sent"
        : `${bizz.bizz_members} members`
      }</h4>
    </div>
  }
  function BizzList() {
    return state.allBizzList.map((bizz) => {
      return renderBizz(bizz)
    })
  }
  return (
    <div className="bizzList">
      {header('Bizz-Buzz', 'Select a Bizz', '/bizzList', dispatch)}
      {BizzList()}
    </div>
  )
}
