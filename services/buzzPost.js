import request from 'superagent'
import url from '../requestUrl'

module.exports = (state, dispatch) => {
  request
    .post(`${url}bizz/buzz/new`)
    .send({poster_id: state.user.user_id, bizz_id: state.bizz.bizz_id, buzz_text: state.buzz_text})
    .withCredentials()
    .end((err, res) => {
      console.log({res});
      if (!err) dispatch({type: "POST_BUZZ"})
    })
}
