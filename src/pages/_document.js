import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name='google-site-verification'
            content='l53G0XsvnsA_mJv2edhC-90dcDQLE6UXn2IjcrJvXUU'
          />
          <Script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-B57K7JWE6J'
          ></Script>
          <Script src='https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js'></Script>
          <Script
            id='google-analytics-script'
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
            src='https://unpkg.com/@glidejs/glide'
            crossorigin='anonymous'
            strategy='beforeInteractive'
          ></Script>
          <link
            href='https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp'
            rel='stylesheet'
          ></link>
          <script src='//js.paystack.co/v1/inline.js'></script>
        </Head>
        <body>
          <div
            version='0.3.39'
            business='Tycoon Systems Corp.'
            style={{ display: 'none' }}
          ></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
