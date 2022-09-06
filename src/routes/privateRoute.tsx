import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router'
import { toast } from 'react-toastify'
import { useAuth } from '../hooks/useAuth'

const PrivateRoute = ({ ...rest }: RouteProps) => {
  const { isAuthenticated } = useAuth()
  if (!isAuthenticated) toast.error('You have to be authenticated to access this page!')
  return isAuthenticated ? <Route {...rest} /> : <Redirect to="/" />
}

export default PrivateRoute
