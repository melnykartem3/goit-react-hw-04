import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';
const clientId = '7hxdiYTJvHBC-CTyrdPLd2nDHKqhAo1BrW1f-KawIac';

export const fetchGallery = async (query, page) => {
  const response = await axios.get('/search/photos', {
    params: {
      client_id: clientId,
      query: query,
      page: page,
    },
  });
  return response.data;
};
