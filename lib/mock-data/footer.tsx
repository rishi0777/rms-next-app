import { FooterProps } from '@rms-forge/ui-footer';
import {
  IconGithub,
  IconMail,
  IconMyBrand,
  IconTwitter,
  IconYoutube,
} from '@rms-forge/ui-icons';
import { Text } from '@rms-forge/ui-text';

export const footerData: Omit<FooterProps, 'onGetInTouchClickSubmit'> = {
  generalData: {
    maxWidth: '1600px',
    dividerColor: '#000e25',
    footerPadding: 'var(--edge-padding)',
    backgroundColor: '#00050d',
    headingColor: '#f2f2f2',
  },

  brandData: {
    tagline: 'EVERYTHING ABOUT ME',
    brandLineColor: '#f2f2f2',
    handleLine: 'rishi_mishra',
    brandLogo: (
      <div style={{ marginTop: '0.6rem', marginBottom: '0.3rem' }}>
        <IconMyBrand color="#00bcd4" size="xl" />
      </div>
    ),
  },

  additionalData: [
    {
      colValuesColor: '#B0BEC5',
      colValuesHoverColor: '#00BCD4',
      heading: 'QUICK ACCESS',
      values: [
        {
          target: 'My Portfolio',
          anchor: 'https://rishi-mishra.vercel.app/',
        },
      ],
    },
    {
      colValuesColor: '#B0BEC5',
      colValuesHoverColor: '#00BCD4',
      heading: 'WEB GAMES',
      values: [
        {
          target: 'Go Fast',
          anchor: 'https://go-fast.netlify.app/',
        },
        {
          target: 'Snake Maniac',
          anchor: 'https://snake-maniac.netlify.app/',
        },
      ],
    },
    {
      colValuesColor: '#B0BEC5',
      colValuesHoverColor: '#00BCD4',
      heading: 'PRODUCTS',
      values: [
        { target: 'SMDB', anchor: 'https://smdb-rishi0777.vercel.app/' },
        {
          target: 'Nyte Stash',
          anchor: 'https://nytestash.vercel.app/',
        },
        {
          target: 'Notes White Board',
          anchor: 'https://r-notes-board.vercel.app/',
        },
        {
          target: 'Venom Vade Mecum',
          anchor: 'https://venom-vade-mecum.vercel.app/',
        },
      ],
    },
  ],

  getInTouchFormData: {
    heading: (
      <Text
        size="b2"
        weight="semibold"
        color="#F2F2F2"
        style={{ marginBottom: '20px' }}
      >
        GET IN TOUCH
      </Text>
    ),
    bottomPadding: true,
    submitButtonData: {
      customButtonColor: {
        textColor: '#FFFFFF',
        backgroundColor: '#00BCD4',
        hoverTextColor: '#FFFFFF',
      },
    },

    loaderData: { loaderVariant: 'default', loaderColor: '#00BCD4' },

    placeholderData: {
      placeholderActiveColor: '#FFFFFF',
      placeholderBackground: '#35394A',
      placeholderColor: '#B0BEC5',
      placeholderColorDropdownOpen: '#FFFFFF',
      placeholderBackgroundDropdownOpen: '#00BCD4',
    },

    additionalData: {
      inputCaretColor: '#00BCD4',
      inputFocusBorderColor: '#00BCD4',
    },

    inputFieldData: [
      {
        helperText: '',
        placeholder: 'Name',
        errorValidation: {
          errorMessage: 'Please enter name',
          validateInput(name: string) {
            return name !== '';
          },
        },
      },
      {
        helperText: '',
        placeholder: 'Message',
        errorValidation: {
          errorMessage: 'Please enter message',
          validateInput(message: string) {
            return message !== '';
          },
        },
      },
    ],
  },

  copyrightData: {
    showBrandIcon: false,
    headline: `Copyright © 2022 All rights reserved | R.M.`,
    brandIcon: {
      iconColor: '#00050d',
      hoverColor: '#00BCD4',
      href: 'https://rishi-mishra.netlify.app',
    },
    affiliatedIcons: [
      {
        href: 'https://www.youtube.com/channel/UCWcQuLYAVIt_VTe3oCrT4PQ',
        icon: <IconYoutube size="sm" hoverColor="#00BCD4" color="#F2F2F2" />,
      },
      {
        href: 'mailto:rishi.misra.777@gmail.com?subject=Contact',
        icon: <IconMail size="sm" hoverColor="#00BCD4" color="#F2F2F2" />,
      },
      {
        href: 'https://github.com/rishi0777',
        icon: <IconGithub size="sm" hoverColor="#00BCD4" color="#F2F2F2" />,
      },
      {
        href: 'https://github.com/rishi0777',
        icon: <IconTwitter size="sm" hoverColor="#00BCD4" color="#F2F2F2" />,
      },
    ],
  },
};
