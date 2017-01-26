import request from 'superagent'
import url from '../requestUrl'

module.exports = (state, dispatch) => {
  request
    .get(`${url}bizz/settings`)
    .query({bizz_id: state.bizz.bizz_id})
    .withCredentials()
    .end((err, res) => {
      console.log({res});
      if (!err) dispatch({type: 'LOAD_BIZZ_SETTINGS', payload: res.body})
      else console.log(err);
    })
}
