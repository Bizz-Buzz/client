import React from 'react'



module.exports = ({state, dispatch}) => {
  function BizzList() {
    console.log("bizz render state", {state});
    return state.bizzList.map((bizz)=>{
      return <div>{bizz.bizz_name}</div>
    })
  }
  return (
    <div className="bizzList">
      <div>Welcome {state.user.first_name} {state.user.last_name}</div>
      <div>{BizzList()}</div>
    </div>
  )
}
