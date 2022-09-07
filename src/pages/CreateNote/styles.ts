import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 26px;
  height: fit-content;

  margin: 0 auto;
  max-width: 500px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 44px;
`;

export const HeaderContainer = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  margin-left: -4px;
  margin-top: 32px;

  h2 {
    font-size: 24px;
    font-family: 'Abhaya Libre';
    font-weight: 700;
    margin-left: 12px;
  }

  svg {
    position: relative;
    top: -1px;
    font-size: 34px;
    font-weight: 400;
  }
`;

export const CreateNoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    margin: 0 auto;
    margin-top: 42px;
  }

  .MuiInputBase-root.MuiFilledInput-root, .MuiInputBase-root {
    margin-top: 28px;
    background-color: #ffffff;

    &::before {
      border: none;
    }

    input {
      color: #834825;
      padding-top: 12px;
      padding-right: 12px;
      padding-bottom: 12px;
      padding-left: 12px;
    }

    input, textarea {
      &::placeholder {
        color: #804627;
        opacity: 1;
        font-weight: 600;
      }
    }
  }
`;
