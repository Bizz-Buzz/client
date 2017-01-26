import React from 'react'
import header from '../header'
import postBuzz from '../../services/buzzPost'

module.exports = (state, dispatch) => {
  function buzzItem(buzz) {
      return <div className="buzzItem">
        <p className="posterName">{buzz.first_name} {buzz.last_name}</p>
        <p className="buzzText">{buzz.buzz_text}</p>
        <p className="buzzPostTime">{buzz.buzz_created_at}</p>
      </div>
  }
  function buzzList(buzzList) {
    return buzzList.map((buzz) => {
      return buzzItem(buzz)
    })
  }
  function displayList() {
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
      <div className="buzzItem">
      <button className="smallButton" id="createBuzzButton" onClick={() => togglePost()}>Buzz</button>
      {displayBuzzPost()}
      </div>
      {displayList()}
    </div>
  )
}
