import { connect } from 'react-redux'
import { AppHeader } from './AppHeader'

const mapStateToProps = (state) => {
  const {
    testReducer: { testState },
  } = state

  return { testList: testState }
}

const mapActionToProps = {}

export default connect(mapStateToProps, mapActionToProps)(AppHeader)
