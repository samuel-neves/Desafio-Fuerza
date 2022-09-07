import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import {
  Container,
  LogoContainer,
  HeaderContainer,
  EmptyContentContainer,
  NotesContainer,
  NoteContainer,
} from './styles';

import { MeditatingGirlImage, Logo } from '../../assets'
import http from '../../services/api';
import { useAuth } from '../../hooks/useAuth';
import { Journal } from '../../interfaces/journal.interface'
import { Entry } from '../../interfaces/entry.interface'
import { Paper } from '../../components';

interface JournalParams {
  journalId: string;
}

const JournalComponent: React.FC = () => {
  const [journal, setJournal] = useState<Journal>()
  const [notes, setNotes] = useState<Entry[]>()
  const { user, logout } = useAuth();
  const history = useHistory();
  const { journalId } = useParams<JournalParams>()

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

      setNotes(response.entries as Entry[])
    })
  }, [journalId, logout])

  return(
    <Container>
      <LogoContainer>
        <img src={Logo} alt="Logo" />
      </LogoContainer>
        {notes && notes.length ? (
          <HeaderContainer>
            <button onClick={() => history.goBack()}>
              <KeyboardArrowLeftIcon />
              <h2>{journal?.title}</h2>
            </button>
            <Button
              variant='outlined'
              onClick={() => history.push(`/new/note/${journalId}`)}
            >
              + Add note
            </Button>
          </HeaderContainer>
        ): ('')}
      {!notes?.length ? (
        <EmptyContentContainer>
          <h2>{journal?.title}</h2>
          <img src={MeditatingGirlImage} alt="Meditating girl" />
          <Button
            variant='text'
            onClick={() => history.push(`/new/note/${journalId}`)}
          >
            Create a note
          </Button>
        </EmptyContentContainer>
      ) : (
        <NotesContainer>
          <div>
            {notes.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <NoteContainer key={item.id}>
                    <Paper title={item.title} id={item.id} journalId={journalId} />
                  </NoteContainer>
                )
              }
              return '';
            })}
          </div>
          <div>
            {notes.map((item, index) => {
              if (index % 2 !== 0) {
                return (
                  <NoteContainer key={item.id}>
                    <Paper title={item.title} id={item.id} journalId={journalId} />
                  </NoteContainer>
                )
              }
              return '';
            })}
          </div>
        </NotesContainer>
      )}
    </Container>
  )
}

export default JournalComponent;
