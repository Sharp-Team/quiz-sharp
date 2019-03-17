import { connect } from 'react-redux'
import { addUser } from '../actions'
import Login from '../components/Navigation/login'

export default connect(null, { addUser })(Login)

