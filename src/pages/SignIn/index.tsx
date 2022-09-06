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

const SignIn: React.FC = () => {
  const [usernameValue, setUsernameValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const [usernameError, setUsernameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const history = useHistory()

  const handleLogInUser = () => {
    if (!usernameValue) setUsernameError(true);
    if (!passwordValue) setPasswordError(true);

    if (!usernameValue || !passwordValue) {
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
