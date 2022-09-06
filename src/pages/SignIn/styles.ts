import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 28px;
  height: 100vh;
  display: flex;
  max-width: 768px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin-left: auto;
    color: #834825;
    margin-top: 12px;
    text-decoration: underline;
  }

  button {
    justify-self: center;
  }

  .MuiTextField-root + .MuiTextField-root {
    margin-top: 28px;
  }
`;

export const FormTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 78px 0 40px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const ImageContainer = styled.div``;
