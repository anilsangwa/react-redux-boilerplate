import {
  TEST_CONSTANT,
  TEST_CONSTANT_ERROR,
  TEST_CONSTANT_SUCCESS,
} from '../constants'

export function testAction(session, resolve, reject) {
  return {
    type: TEST_CONSTANT,
    payload: session,
    resolve,
    reject,
  }
}
export function testSuccessAction(session, resolve, reject) {
  return {
    type: TEST_CONSTANT_SUCCESS,
    payload: session,
    resolve,
    reject,
  }
}
export function testErrorAction(session, resolve, reject) {
  return {
    type: TEST_CONSTANT_ERROR,
    payload: session,
    resolve,
    reject,
  }
}
