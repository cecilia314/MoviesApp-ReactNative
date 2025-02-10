import axios from 'axios';
import { API_TOKEN, BASE_URL } from '../config/apiConfig';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export const getMovies = async (category) => {
  try {
    const response = await axiosInstance.get(`/movie/${category}`, {
      params: { language: 'en-US', page: 1 },
    });

    console.log('Movies:', response.data);
    return response.data;
  } catch (error) {
    console.error(
      'Error fetching movies:',
      error.response?.data || error.message
    );
    throw error;
  }
};

export const getMovieDetail = async (movie_id) => {
  try {
    const response = await axiosInstance.get(`/movie/${movie_id}`, {
      params: { language: 'en-US' },
    });

    console.log('Movie detail:', response.data);
    return response.data;
  } catch (error) {
    console.error(
      'Error fetching movie details:',
      error.response?.data || error.message
    );
    throw error;
  }
};

export const getTvSeries = async (category) => {
  try {
    const response = await axiosInstance.get(`/tv/${category}`, {
      params: { language: 'en-US', page: 1 },
    });

    console.log('TV Series:', response.data);
    return response.data;
  } catch (error) {
    console.error(
      'Error fetching TV series:',
      error.response?.data || error.message
    );
    throw error;
  }
};

export const getTvSerieDetail = async (serie_id) => {
  try {
    const response = await axiosInstance.get(`/tv/${serie_id}`, {
      params: { language: 'en-US' },
    });

    console.log('TV Series detail:', response.data);
    return response.data;
  } catch (error) {
    console.error(
      'Error fetching TV series details:',
      error.response?.data || error.message
    );
    throw error;
  }
};

export const getSearch = async (category, keyword) => {
  try {
    const response = await axiosInstance.get(`/search/${category}`, {
      params: {
        query: keyword,
        include_adult: false,
        language: 'en-US',
        page: 1,
      },
    });

    console.log('Search results:', response.data);
    return response.data;
  } catch (error) {
    console.error(
      'Error fetching search results:',
      error.response?.data || error.message
    );
    throw error;
  }
};
