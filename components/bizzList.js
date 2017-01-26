import React from 'react'
import LoadBuzzList from '../services/loadBuzzList'
import FindBizz from '../services/findBizz'
import header from './header'

module.exports = ({state, dispatch}) => {
  function viewBizz (bizz, dispatch) {
    dispatch({type:"VIEW_BIZZ", payload: bizz})
    LoadBuzzList(bizz.bizz_id, dispatch)
  }
  function BizzList() {
    console.log("bizz render state", {state});
    return state.bizzList.map((bizz)=>{
      return <div className="bizzListItem" onClick={() => viewBizz(bizz, dispatch)}>{bizz.bizz_name}</div>
    })
  }
  return (
    <div className="bizzList">
      {header('Bizz-Buzz', `Welcome ${state.user.first_name} ${state.user.last_name}`, '/', dispatch)}
      <div>{state.bizzList.length != 0
        ? ""
        : <h3 className="bizzListItem">"You haven't joined a Bizz"</h3>}</div>
      <div>{BizzList()}</div>
      <div className="bizzListItem">
        <button onClick={() => FindBizz(state, dispatch)}>Find a Bizz</button>
      </div>
    </div>
  )
}
