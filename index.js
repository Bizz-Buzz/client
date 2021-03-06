import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import Router from 'sheet-router'
import { createStore } from 'redux'

import Login from './components/login'
import Signup from './components/signup'
import BizzList from './components/bizzList'
import ViewBizz from './components/viewBizz'
import FindBizz from './components/findBizz'
import CreateBizz from './components/createBizz'

var reducer = require('./reducer')

var app = document.createElement('div')
document.querySelector('main').appendChild(app)

const initialState = {
  title: "Bizz-Buzz",
  route: '/',
  isLoading: false,
  loginDetails: {},
  signupDetails: {},
  authError: null,
  user: {},
  bizzList: [],
  allBizzList: [],
  bizz: null,
  buzzShow: false,
  followRequests: [],
  createBizzName: ''
}

var store = createStore(reducer, initialState)
const {getState, dispatch, subscribe} = store


const route = Router({ default: '/404' }, [
  ['/', (params) => Login],
  ['/signUp', (params) => Signup],
  ['/bizzList', (params) => BizzList],
  ['/viewBizz', (params) => ViewBizz],
  ['/findBizz', (params) => FindBizz],
  ['/createBizz', (params) => CreateBizz]
])

subscribe(() => {
  console.log(getState().route);
  const Component = route(getState().route)
  render(<Component state={getState()} dispatch={dispatch} />, app)
})

render(<App name='bizzBuzz' />, app)
console.log('welcome to bizzBuzz')

dispatch({type: 'INIT'})
