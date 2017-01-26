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
      {header('Welcome', `${state.user.first_name} ${state.user.last_name}`, '/', dispatch)}
      <div>{state.bizzList.length != 0
        ? ""
        : <h3 className="bizzListItem">"You haven't joined a Bizz"</h3>}</div>
      <div className="content">{BizzList()}</div>
      <div className="footer">
        <span><button onClick={() => FindBizz(state, dispatch)}><img className="footerIcon" src="http://images.clipartpanda.com/magnifying-glass-black-and-white-magnifying-glass-hi.png" alt="magnifying glass" title="Search"/></button></span>
        <span><button onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/createBizz'})}><img className="footerIcon" src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-128.png" alt="plus symbol" title="Add New"/></button></span>
      </div>
    </div>
  )
}
