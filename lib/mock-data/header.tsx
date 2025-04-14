/* eslint-disable */
import { Text } from '@rms-forge/ui-text';
import { HeaderProps } from '@rms-forge/ui-header';
import { IconBag, IconHeart, IconMyBrand, IconUser } from '@rms-forge/ui-icons';

import styles from '@components/ClientWrapper/index.module.scss';

export const headerData = ({
  addedBagItems,
  withSearchBar = true,
  withoutBadges = false,
  withoutMenuItems = false,
}: {
  addedBagItems?: number;
  withSearchBar?: boolean;
  withoutBadges?: boolean;
  withoutMenuItems?: boolean;
}): Omit<
  HeaderProps,
  'setActiveLink' | 'loggedIn' | 'onLogoutClick' | 'onSearchClick'
> => {
  return {
    activeLink: '',
    fixHeader: true,
    searchBarProps: { withSearchBar },
    generalHeaderStyle: {
      maxWidth: '1600px',
      mobileCloseIconContainerTitle: 'QUICK ACCESS',
      headerPadding: 'var(--edge-padding)',
      entityStyle: {
        hoverColor: '#00bcd4',
        activeColor: '#5f6368',
        contentHoverColor: '#00bcd4',
        contentColor: '#5f6368',
      },
      backgroundColor: '#00050d',
      menuDrawerBackgroundColor: '#00050d',
    },
    brandInfo: (
      <>
        <IconMyBrand size="xl" color="#00bcd4" className={styles.brand_icon} />
        <Text weight="bold" color="white100" className={styles.brand_text}>
          RISHI
        </Text>
      </>
    ),
    menuItems: withoutMenuItems
      ? []
      : [
          {
            menuText: 'Home',
            href: '/',
          },
        ],
    badges: withoutBadges ? [] : [],
  };
};
