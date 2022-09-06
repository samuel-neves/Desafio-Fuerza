import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { toast } from 'react-toastify';

import {
  Container,
  FormContainer,
  FormTitleContainer,
  ButtonContainer,
  ImageContainer,
} from './styles';

import { Logo } from '../../assets';
import { handleChangeValue } from '../../utils/strings';

const SignUp: React.FC = () => {
  const [usernameValue, setUsernameValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const [emailValue, setEmailValue] = useState("")
  const [usernameError, setUsernameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const history = useHistory()

  const handleCreateAccount = () => {
    if (!usernameValue) setUsernameError(true);
    if (!passwordValue) setPasswordError(true);

    if (!usernameValue || !passwordValue) {
      toast.error('Please fill all fields');
      return;
    }

    console.log(usernameValue, passwordValue);
    history.goBack()
  }

  return(
    <Container>
      <ImageContainer>
        <img src={Logo} alt="Logo" />
      </ImageContainer>
      <FormContainer>
        <FormTitleContainer>
          <h1>Sign in</h1>
          <Link to="/">Already have an account</Link>
        </FormTitleContainer>
        <TextField
          error={usernameError}
          value={usernameValue}
          label="Define a username"
          variant='outlined'
          autoFocus
          helperText={usernameError && "Please type your username"}
          onChange={(e) => handleChangeValue(e, setUsernameValue, setUsernameError)}
        />
        <TextField
          error={passwordError}
          value={passwordValue}
          label="Set your password"
          variant='outlined'
          helperText={passwordError && "Please type your password"}
          type="password"
          onChange={(e) => handleChangeValue(e, setPasswordValue, setPasswordError)}
        />
        <TextField
          value={emailValue}
          label="Email (optional)"
          variant='outlined'
          type="email"
          onChange={(e) => handleChangeValue(e, setEmailValue)}
        />
      </FormContainer>
      <ButtonContainer>
        <Button variant="contained" onClick={handleCreateAccount}>
          Create account
        </Button>
      </ButtonContainer>
    </Container>
  )
}

export default SignUp;
