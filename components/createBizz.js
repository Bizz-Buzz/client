import React from 'react'
import createBizz from '../services/createBizz'
import header from './header'

module.exports = ({state, dispatch}) => {
  const saveBizzName = (e) => dispatch({type: 'UPDATE_CREATE_BIZZ_DETAILS', payload: e.target.value})
  const submit = (e) => {
    e.preventDefault()
    createBizz(state, dispatch)
  }
  return (
    <div className='createBizz'>
      {header('Bizz-Buzz', 'Create a new Bizz', '/bizzList', dispatch)}
      <form>
        {state.authError ? <p className="authErrorMsg" >{state.authError}</p> : ""}
        <div className="accInputDiv">
          <input className="accDetsInput" id="bizzNameInput" onChange={saveBizzName} type="text" placeholder="Bizz Name" />
        </div>
        <button className='bigButton' onClick={submit} type='submit'>Create Bizz</button>
      </form>
      <button className='smallButton' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/bizzList'})} type='submit'>Cancel</button>
    </div>
  )
}
