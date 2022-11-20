import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppHeader } from '../components/layout/header/AppHeader'
import { AuthMiddleware } from './AuthMiddleware'
const Home = lazy(() => import('../pages/Home'))
const TestList = lazy(() => import('../pages/TestPage'))
const Error404 = lazy(() => import('../pages/Error/Error404'))

function AppRoutes() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route
            exact
            path='/public-route'
            element={<div>This is a Public Route Page</div>}
          />
          <Route exact path='/test-element' element={<TestList />} />
          <Route
            path='/private-route'
            element={
              <AuthMiddleware>
                <div>This is a Private Route</div>
              </AuthMiddleware>
            }
          />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRoutes
