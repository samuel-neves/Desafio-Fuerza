import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { toast } from 'react-toastify';
import { useHistory, useParams } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import {
  Container,
  LogoContainer,
  HeaderContainer,
  CreateNoteContainer,
} from './styles';

import { Logo } from '../../assets'
import { useAuth } from '../../hooks/useAuth';
import { handleChangeValue } from '../../utils/strings';
import { Journal } from '../../interfaces/journal.interface'
import http from '../../services/api';
import { createNote } from '../../utils/apiFunctions';

interface JournalParams {
  journalId: string;
}

const CreateNote: React.FC = () => {
  const [journal, setJournal] = useState<Journal>()
  const [titleValue, setTitleValue] = useState("")
  const [contentValue, setContentValue] = useState("")
  const [titleError, setTitleError] = useState(false)
  const [contentError, setContentError] = useState(false)
  const { user, logout } = useAuth();
  const history = useHistory();
  const { journalId } = useParams<JournalParams>()

  const handleCreateNote = async () => {
    if (!titleValue) setTitleError(true);
    if (!contentValue) setContentError(true);

    if (!titleValue || !contentValue) toast.error('Please fill all fields!')

    const response = await createNote(journalId, titleValue, contentValue);

    if (!response) {
      toast.error('error creating note!')
      return null
    }

    history.goBack();
  }

  useEffect(() => {
    http.get(`/journals/${user.id}`).then((response: any) => {
      if (!response) {
        toast.error('error fetching journals')
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

  return(
    <Container>
      <LogoContainer>
        <img src={Logo} alt="Logo" />
      </LogoContainer>
      <HeaderContainer onClick={() => history.goBack()}>
        <KeyboardArrowLeftIcon />
        <h2>{journal?.title}</h2>
      </HeaderContainer>
      <CreateNoteContainer>
        <TextField
          error={titleError}
          value={titleValue}
          variant='filled'
          autoFocus
          placeholder='Title'
          helperText={titleError && "Type your note title!"}
          onChange={(e) => handleChangeValue(e, setTitleValue, setTitleError)}
        />
        <TextField
          error={contentError}
          value={contentValue}
          variant='filled'
          multiline
          rows={15}
          placeholder='Write your note'
          helperText={contentError && "Type your note content!"}
          onChange={(e) => handleChangeValue(e, setContentValue, setContentError)}
        />
        <Button
          variant='contained'
          onClick={handleCreateNote}
        >
          Save note
        </Button>
      </CreateNoteContainer>
    </Container>
  )
}

export default CreateNote;
