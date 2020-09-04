import { connect } from 'react-redux'
import { saveTheme } from '../actions/ChangeThemeAction'
import Footer from '../../components/layout/Footer'

const mapDispatchProps = dispatch => ({
    dispatch,
    saveColorTheme: color => dispatch(saveTheme(color))
})

function mapStateToProps(state) {
    return {
        themeColor: state.color
    }
}

export default connect(
    mapStateToProps,
    mapDispatchProps
)(Footer)
