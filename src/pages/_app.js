/* AVOID EDITING THIS FILE. DEFAULT APPLICATION ENTRY. MANIPULATE customModules/middleware/Middleware.js FILE FOR MIDDLEWARE LOGIC. If file missing run node init_app.js */

import React from 'react';
import '../styles/features/output.css';
import '../styles/globals.scss';
import '../styles/styles.scss'; // Import all styles in here relative to styles directory using syntax: @import "/appstyles/component.scss";
import Head from 'next/head';
import Script from 'next/script';
import { registerGoogleSignIn } from '/modules/utility/_app';
import { Internal } from '/modules/internal/';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta
          name='google-signin-client_id'
          content='169701902623-9a74mqcbqr38uj87qm8tm3190cicaa7m.apps.googleusercontent.com'
        />
        <title>{pageProps.siteTitle}</title>
      </Head>
      <>
        <Script
          src='https://accounts.google.com/gsi/client'
          async
          defer
        ></Script>
        <Script
          strategy='lazyOnload'
          id='script_one_tap_sign_in'
          className='lazyOnload'
        >
          {registerGoogleSignIn}
        </Script>
      </>
      <Internal {...pageProps} _MasterPageComponent={Component} />
    </div>
  );
}
export default MyApp;
