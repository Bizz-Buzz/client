import request from 'superagent'
import url from '../requestUrl'

module.exports = (state, dispatch) => {
  console.log("meme");
  request
    .post(`${url}bizz/new`)
    .send({bizz_name: state.createBizzName})
    .withCredentials()
    .end((err, res) => {
      if (!err) dispatch({type: 'CREATE_BIZZ', payload: res.body})
      else console.log(err);
    })
}
