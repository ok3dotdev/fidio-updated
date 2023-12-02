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
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-B57K7JWE6J'
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: ` window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-B57K7JWE6J', {
                  page_path: window.location.pathname
                });`,
            }}
          ></script>
          <Script
            src='https://unpkg.com/@glidejs/glide'
            crossorigin='anonymous'
            strategy='beforeInteractive'
          ></Script>
          <link
            href='https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp'
            rel='stylesheet'
          ></link>
          <link rel='preconnect' href='https://fonts.googleapis.com'></link>
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin=''
          ></link>
          <link
            href='https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap'
            rel='stylesheet'
          ></link>
        </Head>
        <body>
          <div version='0.2.10' style={{ display: 'none' }}></div> //TYCOON
          <div
            id='fidio-version'
            version='0.1.0'
            style={{ display: 'none' }}
          ></div>{' '}
          //Fidio
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
