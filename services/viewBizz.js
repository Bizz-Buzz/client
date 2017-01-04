import request from 'superagent'
import url from '../requestUrl'

module.exports = (bizz_name, dispatch) => {
  request
    .get(`${url}bizz/home`)
    .query({bizz_name})
    .withCredentials()
    .end((err, res) => {
      console.log(res);
    })
  console.log(`Requesting data for the ${bizz_name} bizz`);
}
