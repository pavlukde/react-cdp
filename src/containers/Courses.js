import { connect } from 'react-redux'
import { Courses } from '../components/Courses'
import { search } from '../actions'

function mapStateToProps(state) {
  console.log(state.courses.data);
  return { courses : state.courses.data };
}

const mapDispatchToProps = dispatch => ({
  search: (keyword) => {
    dispatch(search(keyword))
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Courses)