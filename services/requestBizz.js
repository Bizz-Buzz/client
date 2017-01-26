import request from 'superagent'
import url from '../requestUrl'

module.exports = (bizz_id, state, dispatch) => {
  if (state.followRequests.includes(bizz_id)) return
  else
  request
    .post(`${url}bizz/request`)
    .send({bizz_id, user_id: state.user.user_id})
    .withCredentials()
    .end((err, res) => {
      if (!err) dispatch({type:"REQUEST_BIZZ", payload: bizz_id})
      else console.log(err)
      })
}
