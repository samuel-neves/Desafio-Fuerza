import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import {
  Container,
  LogoContainer,
  HeaderContainer,
  NoteContainer,
} from './styles';

import { Logo } from '../../assets'
import { useAuth } from '../../hooks/useAuth';
import { Journal } from '../../interfaces/journal.interface'
import { Entry } from '../../interfaces/entry.interface'
import http from '../../services/api';

interface JournalParams {
  journalId: string;
  noteId: string;
}

const Note: React.FC = () => {
  const [journal, setJournal] = useState<Journal>()
  const [note, setNote] = useState<Entry>()
  const { user, logout } = useAuth();
  const history = useHistory();
  const { journalId, noteId } = useParams<JournalParams>()

  useEffect(() => {
    http.get(`/journals/${user.id}`).then((response: any) => {
      if (!response) {
        logout()
        return null
      }

      setJournal(
        response.journals.filter(
          (journal: Journal) => journal.id === journalId
        )[0] || null
      )
    })
  }, [journalId, logout, user.id])

  useEffect(() => {
    http.get(`/journals/entries/${journalId}`).then((response: any) => {
      if (!response) {
        logout()
        return null
      }

      setNote(
        response.entries.filter(
          (note: Entry) => note.id === noteId
        )[0] || null
      )
    })
  }, [journalId, noteId, logout])

  return(
    <Container>
      <LogoContainer>
        <img src={Logo} alt="Logo" />
      </LogoContainer>
      <HeaderContainer onClick={() => history.goBack()}>
        <KeyboardArrowLeftIcon />
        <h2>{journal?.title}</h2>
      </HeaderContainer>
      <NoteContainer>
        <TextField
          value={note?.title}
          variant='filled'
          multiline
          disabled
        />
        <TextField
          value={note?.content}
          variant='filled'
          multiline
          disabled
        />
      </NoteContainer>
    </Container>
  )
}

export default Note;
