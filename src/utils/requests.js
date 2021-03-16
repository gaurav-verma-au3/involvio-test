import axios from "axios";

const get = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    throw err;
  }
};

export const getShowsAPI = async (num) => {
  const url = `http://api.tvmaze.com/shows?page=${num}`;
  try {
    const response = get(url);
    return response;
  } catch (err) {
    return [];
  }
};
