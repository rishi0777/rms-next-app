// Use this file for api related task..Example
const { TMDB_API_TOKEN } = process.env;
export const BASE_URL = 'https://api.themoviedb.org/3';

export const headers = {
  Authorization: `Bearer ${TMDB_API_TOKEN}`,
  accept: 'application/json',
};

export const fetchFromAPI = async (url: string, params?: string) => {
  try {
    const res = await fetch(BASE_URL + url, {
      cache: 'force-cache', // SSG
      // cache:"no-cache", //SSR
      headers,
    });

    const data = await res?.json();
    return data;
  } catch (err) {
    const data = { message: 'API Error Occurred', error: err };
    return data;
  }
};
