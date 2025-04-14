'use client';

import { Text } from '@rms-forge/ui-text';

import styles from './index.module.scss';

const Home = ({ appData }: { appData: any[] }) => {
  return (
    <div className={styles.container}>
      <Text color="white100" size="b1">
        Header
      </Text>

      <div className={styles.grid}>
        {(appData || []).map((app) => (
          <Text key={app.id} color="white100">
            {app.title}
          </Text>
        ))}
      </div>
    </div>
  );
};

export default Home;
