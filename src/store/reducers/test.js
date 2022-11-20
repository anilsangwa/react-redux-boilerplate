import { TEST_CONSTANT_SUCCESS } from '../constants'

const initialState = {
  testState: '',
}

export default function testReducer(state = initialState, action) {
  switch (action.type) {
    case TEST_CONSTANT_SUCCESS:
      return { ...state, testState: action.payload }
    default:
      return state
  }
}
