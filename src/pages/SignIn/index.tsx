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

const SignIn: React.FC = () => {
  const [usernameValue, setUsernameValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const [usernameError, setUsernameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const history = useHistory()

  const handleChangeValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setValueFunction: React.Dispatch<React.SetStateAction<string>>,
    setErrorFunction: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    setValueFunction(e.target.value);
    setErrorFunction(false);
  }

  const handleLogInUser = () => {
    if (!usernameValue) setUsernameError(true);
    if (!passwordValue) setPasswordError(true);

    if (usernameError || passwordError) {
      toast.error('Please fill all fields');
      return;
    }

    console.log(usernameValue, passwordValue);
    history.push('my-journals')
  }

  return(
    <Container>
      <ImageContainer>
        <img src={Logo} alt="Logo" />
      </ImageContainer>
      <FormContainer>
        <FormTitleContainer>
          <h1>Sign in</h1>
          <Link to="signup">Sign up</Link>
        </FormTitleContainer>
        <TextField
          error={usernameError}
          value={usernameValue}
          label="Your username"
          variant='outlined'
          autoFocus
          helperText={usernameError && "Please type your username"}
          onChange={(e) => handleChangeValue(e, setUsernameValue, setUsernameError)}
        />
        <TextField
          error={passwordError}
          value={passwordValue}
          label="Your password"
          variant='outlined'
          helperText={passwordError && "Please type your password"}
          type="password"
          onChange={(e) => handleChangeValue(e, setPasswordValue, setPasswordError)}
        />
        <p>Forgot Password?</p>
      </FormContainer>
      <ButtonContainer>
        <Button variant="contained" onClick={handleLogInUser}>
          Log In
        </Button>
      </ButtonContainer>
    </Container>
  )
}

export default SignIn;
