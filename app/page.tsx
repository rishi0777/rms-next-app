import { fetchFromAPI } from '@lib/config';
import Home from '@components/Home';

const Page = async () => {
  // const data = await fetchFromAPI('/movie/upcoming');

  return <Home data={null} />;
};

export default Page;
