import { put, takeLatest, call } from 'redux-saga/effects'
import { TEST_CONSTANT } from '../constants'
import { TEST_API } from '../apis'
import axios from '../apis/axios'
import { testSuccessAction, testErrorAction } from '../actions'
import { showErrorToast } from '../../functions/Toasts'

/**In Saga we usually use 3  functions for each Api*/

/**
 * Fisrt we create Api call with request parameter
 * @param {*} params parameters to be sent to api call
 * @returns api response
 */
function testApi(params) {
  let url = TEST_API
  return axios.request({
    method: 'get',
    url: url,
    params,
  })
}

/**
 * Second we call api and repending on api response, we reject or resolve
 * @param {*} action contains payload, resolve and reject
 */
function* fetchTest(action) {
  let { payload, resolve, reject } = action
  try {
    let res = yield call(testApi, payload)
    // Here we will send back api response where the action is called
    if (resolve) resolve(res.data)
    // Here we will store response data in redux store  by calling success action
    yield put(testSuccessAction(res.data))
  } catch (e) {
    // Here we show tost in case our api failed
    showErrorToast(e.res)
    yield put(testErrorAction(e.res))
    //  Here we will send back api errors where the action is called
    if (reject) reject(e)
  }
}

/**
 * this is saga Action watcher which watch a action and perform above 2 actions and yield results
 * First it fetch as per request action which will call api and retun response.
 */
export function* testActionWatcher() {
  yield takeLatest(TEST_CONSTANT, fetchTest)
}
