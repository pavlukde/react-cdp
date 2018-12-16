import { connect } from 'react-redux'
import  Courses  from '../components/Courses'
import { requestSearch, requestDelete } from '../actions'

function mapStateToProps(state) {
  console.log(state.courses.data);
  return { courses : state.courses.data };
}

const mapDispatchToProps = dispatch => ({
  search: (keyword) => {
    dispatch(requestSearch(keyword))
  },
  deleteItem: (id) => {
    dispatch(requestDelete(id))
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Courses)