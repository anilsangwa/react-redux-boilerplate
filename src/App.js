import './App.css'
import TestList from './pages/TestPage'

function App() {
  // let authToken = localStorage.getItem('authToken')
  // axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`
  return (
    <div className='App'>
      <TestList />
    </div>
  )
}

export default App
