import request from 'superagent'
import url from '../requestUrl'

module.exports = (state, dispatch) => {
  request
    .get(`${url}bizz`)
    .withCredentials()
    .end((err, res) => {
      if(err) console.log(err);
      console.log({res});
      dispatch({type: "RECIEVE_ALL_BIZZ", payload: res.body})
    })
}
