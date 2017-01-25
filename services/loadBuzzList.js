import request from 'superagent'
import url from '../requestUrl'

module.exports = (bizz_id, dispatch) => {
  console.log({bizz_id});
  dispatch({type: "TOGGLE_LOADING"})
  request
    .get(`${url}bizz/buzzList`)
    .query({bizz_id})
    .withCredentials()
    .end((err, res) => {
      console.log({res});
      dispatch({type: "GET_BUZZ_LIST", payload: res.body})
    })
}
