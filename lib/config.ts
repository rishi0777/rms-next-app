const { API_TOKEN } = process.env;
const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api`;

export const headers = {
  Authorization: `Bearer ${API_TOKEN}`,
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
