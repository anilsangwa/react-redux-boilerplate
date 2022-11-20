import { connect } from 'react-redux'
import { Home } from './Home'

const mapStateToProps = (state) => {
  const {
    testReducer: { testState },
  } = state

  return { testList: testState }
}

const mapActionToProps = {}

export default connect(mapStateToProps, mapActionToProps)(Home)
