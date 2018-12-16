import { connect } from 'react-redux'
import { AddCourse } from '../components/AddCourse'
import { requestAdd, requestSearch } from '../actions'

function mapStateToProps(state) {
  return { course : state.course };
}

const mapDispatchToProps = dispatch => ({
  save: (payload) => {
    dispatch(requestAdd(payload));
    console.log('requestAdd fired');

  },
  cancel: () => {
    dispatch(requestSearch(''));
    console.log('Cancel fired');
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddCourse)