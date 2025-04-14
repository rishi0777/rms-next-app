'use client';

import { Text } from '@rms-forge/ui-text';

import styles from './index.module.scss';

const Home = (data: any) => {
  console.log(data);

  return (
    <Text color="white100" size="b1" className={styles.margin}>
      Hiii {JSON.stringify(data)}
    </Text>
  );
};

export default Home;
