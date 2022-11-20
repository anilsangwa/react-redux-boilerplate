import { all } from 'redux-saga/effects'

import { testActionWatcher } from './test'

/** This rootSaga function combines all sagas and is imported in main saga */
export default function* rootSaga() {
  yield all([testActionWatcher()])
}
