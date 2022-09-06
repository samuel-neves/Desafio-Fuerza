import React from "react"

import Router from "./routes"
import GlobalStyle from "./styles/global"
import { AuthContextProvider } from './contexts/AuthContext'

function App(){
  return(
    <AuthContextProvider>
      <Router />
      <GlobalStyle />
    </AuthContextProvider>
  )
}

export default App
