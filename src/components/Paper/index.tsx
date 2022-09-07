import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ContentContainer } from './styles';

interface NoteProps {
  title: string;
  journalId?: string;
  id?: string;
}

const Paper: React.FC<NoteProps> = ({ title, journalId, id }) => {
  return (
    <Container>
      <Link to={`/my-journals/${journalId}/${id}`}>
        <ContentContainer>
          <textarea
            name="content"
            id={id}
            cols={8}
            rows={6}
            disabled
            value={title}
          />
        </ContentContainer>
      </Link>
    </Container>
  )
};

export default Paper;
