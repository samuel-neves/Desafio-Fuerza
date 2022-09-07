import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ContentContainer, SideBarSection } from './styles';

interface NotebookProps {
  type: 'primary' | 'secondary' | 'creation';
  text?: string;
  id?: string;
}

const Notebook: React.FC<NotebookProps> = ({ type, text, id }) => {
  return (
    <Container>
      {type === 'creation' ? (
        <ContentContainer type={type}>
          <SideBarSection type={type} />
          {text && (
            <p>{text.concat('_')}</p>
          )}
        </ContentContainer>
      ) : (
        <Link to={`/my-journals/${id}/`}>
          <ContentContainer type={type}>
            <SideBarSection type={type} />
            {text && (
              <p>{text}</p>
            )}
          </ContentContainer>
        </Link>
      )}
    </Container>
  )
};

export default Notebook;
