import React from 'react'
import BuzzList from './buzzList'

module.exports = (state, dispatch) => {
  switch (state.bizz.bizzView) {
    default:
    console.log("handling view");
      return BuzzList(state,dispatch)
  }
}
