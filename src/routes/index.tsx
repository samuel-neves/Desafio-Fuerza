import React from "react"

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import PrivateRoute from './privateRoute'

import {
  SignIn,
  SignUp,
  JournalsList,
  Journal,
  CreateJournal,
  CreateNote,
  Note,
} from '../pages'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" component={SignUp} />

        <PrivateRoute path="/new/journal" component={CreateJournal} />
        <PrivateRoute path="/new/note/:journalId" component={CreateNote} />
        <PrivateRoute exact path="/my-journals" component={JournalsList} />
        <PrivateRoute
          exact
          component={Journal}
          path="/my-journals/:journalId/"
        />
        <PrivateRoute
          path="/my-journals/:journalId/:noteId"
          component={Note}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
