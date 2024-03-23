// externalScripts.js
// Place scripts here for importing instead of placing directly in _app or document.js

import React from 'react';
import Script from 'next/script';
import { registerGoogleSignIn } from '../utility/_app';
export const SliderStyles = <link href='https://d2zsu4v7czjhvo.cloudfront.net/all/slick/1.6/slick.css' rel='stylesheet'></link>;
export const SliderTheme = <link href='https://d2zsu4v7czjhvo.cloudfront.net/all/slick/1.6/slick_theme.min.css' rel='stylesheet'></link>;
export const GoogleFontsLink = <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet"></link>;
export const PaystackScript = <script src="//js.paystack.co/v1/inline.js"></script>;
export const GoogleGsiClient = <Script src="https://accounts.google.com/gsi/client" async defer></Script>;
export const GoogleSignInRegister = <Script strategy="lazyOnload" id='script_one_tap_sign_in' className="lazyOnload">
		{registerGoogleSignIn}
	</Script>;
export const ReactCarouselCss = <link href="https://d2zsu4v7czjhvo.cloudfront.net/all/react-carousel/1.30.1/react-carousel.es.min.css" rel="stylesheet"></link>;