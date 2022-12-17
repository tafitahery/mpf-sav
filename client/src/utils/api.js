import axios from 'axios';

export const fetchData = async (url, action) => {
  const { data } = await axios.get(url);
  action(data);
};
