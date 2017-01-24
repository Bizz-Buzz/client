import React from 'react'

module.exports = (state, dispatch) => {
  console.log({state});
  function buzzItem(buzz) {
      return <div className="buzzItem">
        <h2 className="posterName"></h2>
        <h2 className="buzzText">{buzz.buzz_text}</h2>
      </div>
  }
  function buzzList(buzzList) {
    console.log({buzzList});
    return buzzList.map((buzz) => {
      return buzzItem(buzz)
    })
  }
  function displayList() {
    console.log(state.isLoading);
    if (state.isLoading) {
      return <h1>Loading list</h1>
    } else if (state.bizz.buzzList) {
      return buzzList(state.bizz.buzzList)
    }
  }
  return (
    <div className="buzzList">
      {displayList()}
    </div>
  )
}
