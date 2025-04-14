'use client';

import React, { useRef } from 'react';
import { Footer } from '@rms-forge/ui-footer';
import { Header } from '@rms-forge/ui-header';
import { Container } from '@rms-forge/ui-container';
import { FormInnerFunctions } from '@rms-forge/ui-form';
import { IconAlert, IconMail } from '@rms-forge/ui-icons';
import { Toast, ToastProvider } from '@rms-forge/ui-toast';
import { InputFieldEntity } from '@rms-forge/ui-form/dist/components/InputField';

import { headerData } from '@lib/mock-data/header';
import { footerData } from '@lib/mock-data/footer';

import styles from './index.module.scss';

type ClientWrapperProps = {
  children: React.ReactNode;
};

const ClientWrapper = ({ children }: ClientWrapperProps) => {
  const toast = useRef<Toast | null>(null);
  const headerLoggedInRef = useRef<any>(null);
  const footerRef = useRef<FormInnerFunctions | null>(null);

  const sendGetInTouchEmail = async (inputFields?: InputFieldEntity[]) => {
    const name = inputFields?.[0]?.value || '';
    const message = inputFields?.[1]?.value || '';

    try {
      const res = await fetch(
        'https://nytestash.vercel.app/api/users/getInTouch',
        {
          method: 'POST',
          body: JSON.stringify({
            name,
            message,
          }),
          headers: {
            'content-type': 'application/json',
          },
        },
      );

      const data = await res?.json();
      if (data.success && toast.current) {
        toast.current.createToast({
          message: `Thanks for contacting us ...`,
          mode: 'custom',
          autoClose: true,
          icon: <IconMail />,
          autoCloseTime: 5000,
          customColor: { background: '#00BCD4' },
        });
      } else throw new Error('Failed to send email');
    } catch (error) {
      if (toast.current) {
        toast.current.createToast({
          message: `Internal Server Error ...`,
          mode: 'custom',
          autoClose: true,
          icon: <IconAlert />,
          autoCloseTime: 5000,
          customColor: { background: '#ff3f6c' },
        });
      }
    }
  };

  const clickedGetInTouch = async () => {
    // if (headerLoggedInRef.current) {
    const inputFields = footerRef.current?.getInputFieldsData();
    await sendGetInTouchEmail(inputFields);
    // } else footerRef.current?.setOnSubmitError('Login to continue');

    footerRef.current?.clearInputFieldsData();
    footerRef.current?.setIsLoading(false);
  };

  return (
    <div className={styles.container}>
      <Header
        {...headerData({
          withoutBadges: true,
          withSearchBar: false,
          withoutMenuItems: true,
        })}
        loggedIn={!!headerLoggedInRef.current}
        activeLink="Home"
        onLogoutClick={async () => {}}
      />

      <ToastProvider ref={toast} />

      <div className={styles.children}>
        <Container className={styles.main_child} maxContainerWidth="1600px">
          {children}
        </Container>
      </div>

      <Footer
        {...footerData}
        ref={footerRef}
        onGetInTouchFormSubmit={clickedGetInTouch}
      />
    </div>
  );
};

export default ClientWrapper;
