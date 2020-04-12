import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.outsidein.dev/oeYuMLdaxecTKyWpIL4AzBXiZaftXcV5',
});

const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(response => response.data);
  },
};

export default api;
