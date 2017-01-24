import request from 'superagent'
import url from '../requestUrl'

module.exports = (state, dispatch) => {
  request
    .get(`${url}bizz/buzzList`)
    .query({bizz_id: state.bizz.bizz_id})
    .withCredentials()
    .end((err, res) => {
      console.log({res});
    })
}
