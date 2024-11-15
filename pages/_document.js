import Document, { Html, Head, Main, NextScript } from 'next/document';
import { resolveVariables } from '/app.config';
const { dev } = resolveVariables();

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {!dev && (
            <script
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
          )}
          {!dev && (
            <script
              async
              src='https://www.googletagmanager.com/gtag/js?id=G-B57K7JWE6J'
            ></script>
          )}
          {!dev && (
            <meta
              name='google-adsense-account'
              content='ca-pub-6676041710547145'
            ></meta>
          )}
          {!dev && (
            <script
              async
              src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6676041710547145'
            ></script>
          )}
          <script src='https://cdnjs.cloudflare.com/ajax/libs/dompurify/2.3.1/purify.min.js'></script>
          <link
            href='https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap'
            rel='stylesheet'
          ></link>
          <link
            href='https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap'
            rel='stylesheet'
          ></link>

          <link
            href='https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap'
            rel='stylesheet'
          ></link>
        </Head>
        {dev && <meta name='robots' content='noindex, nofollow' />}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
