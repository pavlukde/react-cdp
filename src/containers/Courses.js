import { connect } from 'react-redux'
import  Courses  from '../components/Courses'
import { requestSearch, requestDelete } from '../actions'
import { coursesSelector } from '../selectors/coursesSelector'

const mapStateToProps = state => ({
  courses : coursesSelector(state)
})

const mapDispatchToProps = dispatch => ({
  search: (keyword) => {
    dispatch(requestSearch(keyword))
  },
  deleteItem: (id) => {
    dispatch(requestDelete(id))
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Courses)