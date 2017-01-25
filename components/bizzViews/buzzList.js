import React from 'react'

import postBuzz from '../../services/buzzPost'

module.exports = (state, dispatch) => {
  console.log({state});
  function buzzItem(buzz) {
      return <div className="buzzItem">
        <h4 className="posterName">{buzz.first_name} {buzz.last_name}</h4>
        <p className="buzzPostTime">{buzz.buzz_created_at}</p>
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
  function togglePost() {
    dispatch({type: "TOGGLE_BUZZ_POST"})
  }
  const saveBuzzPost = (e) => dispatch({type: "SAVE_BUZZ_POST", payload: e.target.value})
  function displayBuzzPost() {
    if (state.buzzShow) {
      return <div className="bizzPost">
        <input type="text" onChange={saveBuzzPost} placeholder="Enter post here"></input>
        <input type="submit" onClick={() => postBuzz(state, dispatch)}></input>
      </div>
    }
  }
  return (
    <div className="buzzList">
      <button onClick={() => togglePost()}>Buzz</button>
      {displayBuzzPost()}
      {displayList()}
    </div>
  )
}
