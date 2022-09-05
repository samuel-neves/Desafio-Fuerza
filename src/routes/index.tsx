import React from "react"

import { BrowserRouter, Switch, Route } from 'react-router-dom'

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

        <Route path="/new/journal" component={CreateJournal} />
        <Route path="/new/note/:journalId" component={CreateNote} />
        <Route exact path="/my-journals" component={JournalsList} />
        <Route
          exact
          component={Journal}
          path="/my-journals/:journalId/"
        />
        <Route
          path="/my-journals/:journalId/:noteId"
          component={Note}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
