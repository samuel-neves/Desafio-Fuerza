import React from 'react';

import { Container, ContentContainer, SideBarSection } from './styles';

interface NotebookProps {
  type: 'primary' | 'secondary' | 'creation';
  text?: string;
}

const Notebook: React.FC<NotebookProps> = ({ type, text }) => {
  return (
    <Container>
      <ContentContainer type={type}>
        <SideBarSection type={type} />
        {text && (
          <p>{type === 'creation' ? text.concat('_') : text}</p>
        )}
      </ContentContainer>
    </Container>
  )
};

export default Notebook;
