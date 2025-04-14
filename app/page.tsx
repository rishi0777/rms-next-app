import Home from '@components/Home';
import { fetchFromAPI } from '@lib/config';
import ClientWrapper from '@components/ClientWrapper';

const Page = async () => {
  const appData = await fetchFromAPI('/apps');

  return (
    <ClientWrapper>
      <Home appData={appData} />
    </ClientWrapper>
  );
};

export default Page;
