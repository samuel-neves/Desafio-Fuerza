import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

import {
  Container,
  HeaderContainer,
  CreateJournalContainer,
} from './styles';

import { Logo } from '../../assets'
import { useAuth } from '../../hooks/useAuth';
import { Notebook } from '../../components';
import { handleChangeValue } from '../../utils/strings';
import { createJournal } from '../../utils/apiFunctions';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const CreateJournal: React.FC = () => {
  const [journalNameValue, setJournalNameValue] = useState("")
  const [journalNameError, setJournalNameError] = useState(false)
  const { user, logout } = useAuth();
  const history = useHistory();

  const handleCreateJournal = async () => {
    if (!journalNameValue) {
      setJournalNameError(true);
      toast.error('Please type a name for your journal!')
      return;
    }

    if (user && user.id) {
      const response = await createJournal(user.id, journalNameValue);

      if (!response) {
        toast.error('Error on create journal!')
        logout()

        return null
      } else history.goBack();
    }
  }

  return(
    <Container>
      <HeaderContainer>
        <img src={Logo} alt="Logo" />
      </HeaderContainer>
      <CreateJournalContainer>
        <Notebook type='creation' text={journalNameValue} />
        <TextField
          error={journalNameError}
          value={journalNameValue}
          variant='filled'
          autoFocus
          helperText={journalNameError && "Type your journal name!"}
          onChange={(e) => handleChangeValue(e, setJournalNameValue, setJournalNameError)}
        />
        <Button
          variant='contained'
          onClick={handleCreateJournal}
        >
          Save journal
        </Button>
      </CreateJournalContainer>
    </Container>
  )
}

export default CreateJournal;
