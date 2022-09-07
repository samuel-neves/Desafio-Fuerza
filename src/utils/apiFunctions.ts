import http from '../services/api';

const createJournal = async (userId: string, title: string) => {
  const response = await http.post('/journals', {
    userId,
    title,
  });

  return response;
}

export {
  createJournal,
}
