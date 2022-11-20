import { ToastContainer } from 'react-toastify'
import { useState } from 'react'
import './TestList.css'
import {
  showSuccessToast,
  showInfoToast,
  showWarningToast,
  showErrorToast,
  showDefaultToast,
} from '../../functions/Toasts'

import {
  showSuccessAlert,
  showInfoAlert,
  showWarningAlert,
  showErrorAlert,
  showDefaultAlert,
} from '../../functions/Alerts'

export const TestList = ({ testList, testAction }) => {
  const [fetchingList, setFetchingList] = useState(false)
  return (
    <>
      <ToastContainer />
      <div className='w-full lg:max-w-full lg:flex md:flex sm:flex justify-center text-center'>
        <div className='max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mx-1'>
          <h5 className='mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white'>
            Showing Different type of toasts
          </h5>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            Here we display different type of toads on click of buttons
          </p>
          <button
            className='m-1 bg-stone-500 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => showDefaultToast('Default')}
          >
            Default
          </button>
          <button
            className='m-1 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => showSuccessToast('Success')}
          >
            Success
          </button>
          <button
            className='m-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => showErrorToast('Error')}
          >
            Error
          </button>
          <button
            className='m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => showInfoToast('Info')}
          >
            Info
          </button>
          <button
            className='m-1 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => showWarningToast('Warning')}
          >
            Warning
          </button>
        </div>
        <div className='max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mx-1'>
          <h5 className='mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white'>
            Showing Different type of Alerts
          </h5>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            Here we display different type of Alerts on click of buttons
          </p>
          <button
            className='m-1 bg-stone-500 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => showDefaultAlert('Default Message', 'Title')}
          >
            Default
          </button>
          <button
            className='m-1 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => showSuccessAlert('Success Message', 'Title')}
          >
            Success
          </button>
          <button
            className='m-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => showErrorAlert('Error Message', 'Title')}
          >
            Error
          </button>
          <button
            className='m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => showInfoAlert('Info Message')}
          >
            Info
          </button>
          <button
            className='m-1 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => showWarningAlert('Warning Message')}
          >
            Warning
          </button>
        </div>
      </div>
      <hr className='my-4 h-px bg-gray-200 border-0 dark:bg-gray-700' />
      <button
        className='m-1 bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded'
        // onClick={() => dispatch({ type: TEST_CONSTANT })}
        onClick={() => {
          setFetchingList(true)
          testAction(
            {},
            () => setFetchingList(false),
            () => setFetchingList(false)
          )
        }}
      >
        Call Test API
      </button>
      <h3 className='text-3xl font-bold underline'>Test API Result</h3>
      {!fetchingList && testList ? (
        <p>
          {testList.anime} <br />
          {testList.character} <br />
          {testList.quote}
        </p>
      ) : (
        fetchingList && (
          <div className='animate-pulse space-y-3'>
            <div className='h-2 bg-slate-700 rounded'></div>
            <div className='h-2 bg-slate-700 rounded'></div>
            <div className='h-2 bg-slate-700 rounded'></div>
          </div>
        )
      )}
    </>
  )
}
