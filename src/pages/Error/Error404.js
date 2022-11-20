import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <section>
      <h2>404</h2>
      <p>Page Not Found</p>
      <Link to='/'>Back to Home</Link>
    </section>
  )
}

export default Error404
