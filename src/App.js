import './App.css'
import AppRoutes from './routes'

function App() {
  // let authToken = localStorage.getItem('authToken')
  // axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`
  return (
    <div className='App'>
      <AppRoutes />
    </div>
  )
}

export default App
