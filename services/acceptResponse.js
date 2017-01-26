import request from 'superagent'
import url from '../requestUrl'

module.exports = (request_id, state, dispatch) => {
  console.log(request_id);
  request
    .post(`${url}bizz/request/accept`)
    .send({request_id})
    .withCredentials()
    .end((err, res) => {
      console.log({res});
      if (!err) dispatch({type:"REQUEST_ACCEPTED", payload: request_id})
      else console.log(err)
    })
}
