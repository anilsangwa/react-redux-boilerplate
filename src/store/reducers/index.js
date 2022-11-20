import { combineReducers } from '@reduxjs/toolkit'
import testReducer from './test'

/** Comnine all imported reducers and export them  */
const combinedReducers = combineReducers({
  testReducer,
})

/** Create a rootReducer to export and use in main saga setup */
const rootReducer = (state, action) => {
  return combinedReducers(state, action)
}

export default rootReducer
