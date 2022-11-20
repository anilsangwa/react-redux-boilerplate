import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

/**
 * @method showSuccessToast
 * @param {message} message Display Success Toast with given message
 */
export const showSuccessToast = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
  })
}

/**
 * @method showErrorToast
 * @param {message} message Display Error Toast with given message
 */
export const showErrorToast = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
  })
}

/**
 * @method showWarningToast
 * @param {message} message Display Warning Toast with given message
 */
export const showWarningToast = (message) => {
  toast.warning(message, {
    position: toast.POSITION.TOP_RIGHT,
  })
}

/**
 * @method showInfoToast
 * @param {message} message Display Info Toast with given message
 */
export const showInfoToast = (message) => {
  toast.info(message, {
    position: toast.POSITION.TOP_RIGHT,
  })
}

/**
 * @method showDefaultToast
 * @param {message} message Display Default Toast with given message
 */
export const showDefaultToast = (message) => {
  toast(message, {
    position: toast.POSITION.TOP_RIGHT,
  })
}

/**
 * @method showCustomToast
 * @param {message} message Display Custom Toast with given message by adding custom class
 */
export const showCustomToast = (message) => {
  toast(message, {
    position: toast.POSITION.TOP_RIGHT,
    className: 'foo-bar',
  })
}
