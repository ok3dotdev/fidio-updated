'use client';

import Script from 'next/script';

export default function Analytics() {
  return (
    <>
      <Script
        id='google-analytics-script'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B57K7JWE6J', {
              page_path: window.location.pathname
            });
          `,
        }}
      />
      <Script
        strategy='afterInteractive'
        src='https://www.googletagmanager.com/gtag/js?id=G-B57K7JWE6J'
      />
    </>
  );
}
