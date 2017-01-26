const clone = require('clone')

module.exports = (state, action) => {
  var newState = clone(state)
  const {payload, type} = action
  switch (type) {
    case "TOGGLE_LOADING":
      console.log("loading toggled");
      newState.isLoading = !newState.isLoading
      return newState
    case "AUTH_ERROR":
      newState.authError = payload
      return newState
    case 'UPDATE_LOGIN_DETAILS':
      newState.loginDetails[payload.change] = payload.value
      return newState
    case 'UPDATE_SIGNUP_DETAILS':
      newState.signupDetails[payload.change] = payload.value
      console.log(newState.signupDetails);
      return newState
    case 'LOGIN_SUCCESS':
      newState.user = payload.user
      newState.bizzList = payload.bizz_list
      newState.route = '/bizzList'
      return newState
    case 'SIGNUP_SUCCESS':
      newState.route = '/login'
      newState.authError = "Signup Successful, please log in"
      return newState
    case 'CHANGE_ROUTE':
      newState.route = payload
      newState.authError = null
      return newState
    case 'VIEW_BIZZ':
      newState.bizz = payload
      newState.bizz.view = 'buzzList'
      newState.route = '/viewBizz'
      return newState
    case 'UPDATE_CREATE_BIZZ_DETAILS':
      newState.createBizzName = payload
      return newState
    case 'CREATE_BIZZ':
      newState.bizzList.push(payload)
      newState.route = '/bizzList'
      return newState
    case 'GET_BUZZ_LIST':
      newState.bizz.buzzList = payload
      newState.isLoading = false
      return newState
    case 'TOGGLE_BUZZ_POST':
      newState.buzzShow = !newState.buzzShow
      return newState
    case 'SAVE_BUZZ_POST':
      newState.buzz_text = payload
      return newState
    case 'POST_BUZZ':
      newState.bizz.buzzList.unshift({
        buzz_id: payload,
        buzz_text: newState.buzz_text,
        buzz_created_at: "Just Now",
        first_name: newState.user.first_name,
        last_name: newState.user.last_name,
        bizz_id: newState.bizz.bizz_id
      })
      return newState
    case 'RECIEVE_ALL_BIZZ':
      newState.allBizzList = payload.all_bizz_list
      newState.followRequests = payload.requests
      newState.route = '/findBizz'
      return newState
    case 'REQUEST_BIZZ':
      newState.followRequests.push(payload)
      return newState
    case 'CHANGE_BIZZ_VIEW':
      newState.bizz.bizzView = payload
      return newState
    default:
      return newState
  }
}
