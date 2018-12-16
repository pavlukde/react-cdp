import { connect } from 'react-redux'
import { Courses } from '../components/Courses'
import { requestSearch } from '../actions'

function mapStateToProps(state) {
  console.log(state.courses.data);
  return { courses : state.courses.data };
}

const mapDispatchToProps = dispatch => ({
  search: (keyword) => {
    dispatch(requestSearch(keyword))
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Courses)