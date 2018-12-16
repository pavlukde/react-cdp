import { connect } from 'react-redux'
import { Logout } from '../components/Logout'
import { logout } from '../actions'

function mapStateToProps(state) {
  return { auth: state.auth };
}

const mapDispatchToProps = dispatch => ({
    logout: () => {
      dispatch(logout())
    }
  })


export default connect(mapStateToProps, mapDispatchToProps)(Logout)