import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 26px;
  height: fit-content;

  margin: 0 auto;
  max-width: 500px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 44px;
`;

export const CreateJournalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 110px;

  button {
    margin: 0 auto;
    margin-top: 42px;
  }

  .MuiInputBase-root.MuiFilledInput-root, .MuiInputBase-root {
    margin-top: 36px;
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
  }
`;
