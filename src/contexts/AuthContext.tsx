import React, { createContext, ReactNode, useState } from 'react'

import http from '../services/api'
import { AuthResponse } from '../services/mirage/routes/user'

type User = {
  id?: string
  username: string
  journalIds: string[] | null
}

interface AuthContextProviderProps {
  children: ReactNode
}

interface AuthContextData {
  user: User
  isAuthenticated: boolean
  authenticate: (username: string, password: string) => Promise<boolean>
  createAccount: (
    username: string,
    password: string,
    email?: string
  ) => Promise<boolean>
  logout: () => void
}

export const AuthContext = createContext({} as AuthContextData)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('@Nocturnal:Token') !== null
  })
  const [user, setUser] = useState<User>(() => {
    return JSON.parse(sessionStorage.getItem('@Nocturnal:User') || 'null')
  })

  const authenticate = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    const response: any = await http.post('/auth/login', {
      username,
      password
    })

    console.log(response);

    if (!response) return false

    const authenticatedUser = {
      id: (response as AuthResponse).user.id,
      username: (response as AuthResponse).user.username,
      journalIds: (response as AuthResponse).user.journalIds
    }

    setUser(authenticatedUser)

    sessionStorage.setItem('@Nocturnal:User', JSON.stringify(authenticatedUser))
    sessionStorage.setItem('@Nocturnal:Token', (response as AuthResponse).token)

    setIsAuthenticated(true)

    return true
  }

  const createAccount = async (
    username: string,
    password: string,
    email?: string
  ) => {
    const response: any = await http.post('/auth/signup', {
      username,
      password,
      email
    })

    if (!response) return false

    return true
  }

  const logout = () => {
    sessionStorage.removeItem('@Nocturnal:User')
    sessionStorage.removeItem('@Nocturnal:Token')
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        authenticate,
        createAccount,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
