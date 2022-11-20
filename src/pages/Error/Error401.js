import { Link } from 'react-router-dom'

const Error401 = () => {
  return (
    <section>
      <h2>401</h2>
      <p>Unauthorized</p>
      <Link to='/'>Back to Home</Link>
      <Link to='/login'>Login</Link>
    </section>
  )
}

export default Error401
