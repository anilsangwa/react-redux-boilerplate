import swal from 'sweetalert'

/* For More alerat guide, visit https://sweetalert.js.org/guides/ */

/**
 * Function to show Success Alert
 * @param {title} message Display Title for Alert (optional)
 * @param {text} message Display Text/Body for Alert
 */
export const showSuccessAlert = (text, title = '') => {
  swal({
    title: title,
    text: text,
    icon: 'success',
  })
}

/**
 * Function to show Error Alert
 * @param {title} message Display Title for Alert (optional)
 * @param {text} message Display Text/Body for Alert
 */
export const showErrorAlert = (text, title = '') => {
  swal({
    title: title,
    text: text,
    icon: 'error',
  })
}

/**
 * Function to show Warning Alert
 * @param {title} message Display Title for Alert (optional)
 * @param {text} message Display Text/Body for Alert
 */
export const showWarningAlert = (text, title = '') => {
  swal({
    title: title,
    text: text,
    icon: 'warning',
  })
}

/**
 * Function to show Info Alert
 * @param {title} message Display Title for Alert (optional)
 * @param {text} message Display Text/Body for Alert
 */
export const showInfoAlert = (text, title = '') => {
  swal({
    title: title,
    text: text,
    icon: 'info',
  })
}

/**
 * Function to show Default Alert
 * @param {title} message Display Title for Alert (optional)
 * @param {text} message Display Text/Body for Alert
 */
export const showDefaultAlert = (text, title = '') => {
  swal(title, text)
}

/**
 * Function to show Custom Alert
 * @param {title} message Display Title for Alert (optional)
 * @param {text} message Display Text/Body for Alert
 * @param {icon} message Display Icon type for Alert
 * @param {button} message Display button text for Alert
 */
export const showCustomAlert = (text, title = '', icon = '', button = '') => {
  swal({
    title: title,
    text: text,
    icon: icon,
    button: button,
  })
}
/**
 * Function to show Confirmation Alert
 * @param {title} message Display Title for Alert (optional)
 * @param {text} message Display Text/Body for Alert
 * @param {icon} message Display Icon type for Alert
 * @param {cancelMessage} message Display Alert message when cancelled
 * @param {successMessage} message Display Alert message when accepted/success
 */
export const showConfirmationAlert = (
  text,
  cancelMessage,
  successMessage,
  title = 'Are you sure?',
  icon = 'warning'
) => {
  swal({
    title: title,
    text: text,
    icon: icon,
    buttons: true, // will show Cancel button
    dangerMode: true, // Set focus on cancel button
  }).then((willDelete) => {
    if (willDelete) {
      swal(successMessage, {
        icon: 'success',
      })
    } else {
      swal(cancelMessage)
    }
  })
}
