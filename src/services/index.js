import apisauce from 'apisauce';
import config from '../config';

const create = (baseURL = config.API_URL) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
    },
    timeout: 10000,
  });

  const liveMatches = () => api.post('/liveMatches');

  return {
    liveMatches,
  };
};

export default {
  create,
};
