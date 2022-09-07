import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

import {
  Container,
  HeaderContainer,
  EmptyContentContainer,
  JournalsContainer,
  JournalContainer,
} from './styles';

import { MeditatingGirlImage, Logo } from '../../assets'
import http from '../../services/api';
import { useAuth } from '../../hooks/useAuth';
import { Journal } from '../../interfaces/journal.interface'
import { Notebook } from '../../components';

const JournalsList: React.FC = () => {
  const [journals, setJournals] = useState<Journal[]>()
  const { user, logout } = useAuth();
  const history = useHistory();

  useEffect(() => {
    http.get(`/journals/${user.id}`).then((response: any) => {
      if (!response) {
        logout()
        return null
      }

      setJournals(response.journals as Journal[])
    })
  }, [logout, user.id])

  return(
    <Container>
      <HeaderContainer>
        <img src={Logo} alt="Logo" />
        {journals && journals.length ? (
          <Button
            variant='outlined'
            onClick={() => history.push('/new/journal')}
          >
            + Add Journal
          </Button>
        ) : ('')}
      </HeaderContainer>
      {!journals?.length ? (
        <EmptyContentContainer>
          <img src={MeditatingGirlImage} alt="Meditating girl" />
          <Button
            variant='text'
            onClick={() => history.push('/new/journal')}
          >
            Create a journal
          </Button>
        </EmptyContentContainer>
      ) : (
        <JournalsContainer>
          <div>
            {journals.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <JournalContainer key={item.id}>
                    <Notebook
                      text={item.title}
                      type='primary'
                      id={item.id}
                    />
                  </JournalContainer>
                )
              }
              return '';
            })}
          </div>
          <div>
            {journals.map((item, index) => {
              if (index % 2 !== 0) {
                return (
                  <JournalContainer key={item.id}>
                    <Notebook
                      text={item.title}
                      type='secondary'
                      id={item.id}
                    />
                  </JournalContainer>
                )
              }
              return '';
            })}
          </div>
        </JournalsContainer>
      )}
    </Container>
  )
}

export default JournalsList;
