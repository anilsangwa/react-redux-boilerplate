import { connect } from 'react-redux'
import { testAction } from '../../store/actions'
import { TestList } from './TestList'

const mapStateToProps = (state) => {
  const {
    testReducer: { testState },
  } = state

  return { testList: testState }
}

const mapActionToProps = { testAction }

export default connect(mapStateToProps, mapActionToProps)(TestList)
