/* AVOID EDITING THIS FILE. DEFAULT APPLICATION ENTRY. MANIPULATE customModules/middleware/Middleware.js FILE FOR MIDDLEWARE LOGIC. If files missing run node init_app.js */

import React from 'react';
import '../styles/globals.scss'; // Place style import declarations in /styles/styles.scss and actual style css files under /styles/appstyles/
import '../styles/features/tailwind.css';
import Head from 'next/head';
import { Internal } from '/modules/internal/';
import { ThemeProvider } from '../components/provider';
import { Toaster } from '@/components/ui/toaster';

function MyApp({ Component, pageProps }) {
  return (
    <div className='antialiased'>
      <Head>
        <meta
          name='google-signin-client_id'
          content='169701902623-9a74mqcbqr38uj87qm8tm3190cicaa7m.apps.googleusercontent.com'
        />
      </Head>
      <ThemeProvider attribute='class' defaultTheme='dark'>
        <Internal {...pageProps} _MasterPageComponent={Component} />
        <Toaster />
      </ThemeProvider>
    </div>
  );
}
export default MyApp;
