import React from 'react';
import Script from 'next/script';
import { registerGoogleSignIn } from '../utility/_app';
const SliderStyles = React.createElement('link', {
    href: 'https://d2zsu4v7czjhvo.cloudfront.net/all/slick/1.6/slick.css',
    rel: 'stylesheet',
  }),
  SliderTheme = React.createElement('link', {
    href: 'https://d2zsu4v7czjhvo.cloudfront.net/all/slick/1.6/slick_theme.min.css',
    rel: 'stylesheet',
  }),
  GoogleFontsLink = React.createElement('link', {
    href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp',
    rel: 'stylesheet',
  }),
  PaystackScript = React.createElement('script', {
    src: '//js.paystack.co/v1/inline.js',
  }),
  GoogleGsiClient = React.createElement(Script, {
    src: 'https://accounts.google.com/gsi/client',
    async: !0,
    defer: !0,
  }),
  GoogleSignInRegister = (e) =>
    React.createElement(
      Script,
      {
        strategy: 'lazyOnload',
        id: 'script_one_tap_sign_in',
        className: 'lazyOnload',
      },
      registerGoogleSignIn(e)
    ),
  ReactCarouselCss = React.createElement('link', {
    href: 'https://d2zsu4v7czjhvo.cloudfront.net/all/react-carousel/1.30.1/react-carousel.es.min.css',
    rel: 'stylesheet',
  });
export {
  SliderStyles,
  SliderTheme,
  GoogleFontsLink,
  PaystackScript,
  GoogleGsiClient,
  GoogleSignInRegister,
  ReactCarouselCss,
};
