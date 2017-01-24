import request from 'superagent'
import url from '../requestUrl'

module.exports = (bizz_name, dispatch) => {
  request
    .get(`${url}bizz/list`)
    .query({bizz_name})
    .withCredentials()
    .end((err, res) => {
      console.log({res});
      if (!err) dispatch({type: "VIEW_BIZZ", payload: res.body})
    })
}
