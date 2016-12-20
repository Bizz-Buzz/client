import request from 'superagent'
import url from '../requestUrl'

module.exports = ({loginDetails}, dispatch) => {
  const {username, password} = loginDetails
  request
    .post(`http://localhost:3000/api/v1/users/login`)
    .send({username, password})
    .withCredentials()
    .end((err, res) => {
      if (!err) {
       dispatch({ type: 'LOGIN_SUCCESS', payload: res.body.user })
     }
     else dispatch({ type: 'CHANGE_ROUTE', payload: '/' })
    })
}
