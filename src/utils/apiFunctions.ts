import http from '../services/api';

const createJournal = async (userId: string, title: string) => {
  const response = await http.post('/journals', {
    userId,
    title,
  });

  return response;
}

const createNote = async (journalId: string, title: string, content: string) => {
  const response = await http.post(`/journals/entry/${journalId}`, {
    title,
    content,
  });

  return response;
}

export {
  createJournal,
  createNote,
}
