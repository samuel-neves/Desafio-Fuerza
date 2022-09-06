import React, { useEffect, useState } from 'react';
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
import { useAuth } from '../../hooks/useAuth'

const SignIn: React.FC = () => {
  const [usernameValue, setUsernameValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const [usernameError, setUsernameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const history = useHistory()
  const { isAuthenticated, authenticate } = useAuth()

  const handleLogInUser = async () => {
    if (!usernameValue) setUsernameError(true);
    if (!passwordValue) setPasswordError(true);

    if (!usernameValue || !passwordValue) {
      toast.error('Please fill all fields');
      return;
    }

    const authenticateSucess = await authenticate(usernameValue, passwordValue);

    if (!authenticateSucess) toast.error('Username or password incorrect!')
    else history.push('my-journals')
  }

  useEffect(() => {
    if (isAuthenticated) history.push('my-journals');
  }, [history, isAuthenticated]);

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
        <p onClick={() => toast.info('Function will be implemented in the future!')}>Forgot Password?</p>
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
