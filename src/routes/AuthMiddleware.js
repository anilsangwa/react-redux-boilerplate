import React from 'react'
import Error401 from '../pages/Error/Error401'

export const AuthMiddleware = ({ children }) => {
  // In login function, after login, if we need to redirect to / , use below code
  // const navigate = useNavigate()
  //   const location = useLocation()
  //   const redirectPath = location.state?.path || '/'
  // navigate(redirectPath, { replace: true })
  let isLoggedIn = false
  return isLoggedIn ? children : <Error401 />
}
