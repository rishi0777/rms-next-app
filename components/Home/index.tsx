'use client';

import { Text } from '@rms-forge/ui-text';

import styles from './index.module.scss';

const Home = (data: any) => {
  console.log(data);
  return (
    <Text color="white" size="b1" className={styles.margin}>
      HII
    </Text>
  );
};

export default Home;
