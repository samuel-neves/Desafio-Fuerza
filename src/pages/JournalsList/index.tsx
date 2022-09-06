import React from 'react';
import { useAuth } from '../../hooks/useAuth';

import {
  Container,
  HeaderContainer,
  EmptyContentContainer,
} from './styles';

import { MeditatingGirlImage, Logo } from '../../assets'
import { Button } from '@mui/material';

const JournalsList: React.FC = () => {
  const {user} = useAuth();
  console.log(user);

  return(
    <Container>
      <HeaderContainer>
        <img src={Logo} alt="Logo" />
        {user.journalIds && (
          <Button variant='outlined'>
            + Add Journal
          </Button>
        )}
      </HeaderContainer>
      {!user.journalIds ? (
        <EmptyContentContainer>
          <img src={MeditatingGirlImage} alt="Meditating girl" />
          <Button variant='text'>
            Create a journal
          </Button>
        </EmptyContentContainer>
      ) : (
        <p>journalIds preenchido</p>
      )}
    </Container>
  )
}

export default JournalsList;
