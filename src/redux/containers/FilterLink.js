import {connect} from 'react-redux'
import {setVisibilityFilter} from '../actions'
import Link from '../../components/Link'

const mapStateToProps = (state, props) =>({
    active: props.filter === state.visibilityFilter
})
const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)
