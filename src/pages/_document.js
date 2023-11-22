import Document, { Html, Head, Main, NextScript } from 'next/document';
<<<<<<< HEAD
import Script from 'next/script';
=======
>>>>>>> pull-branch

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
<<<<<<< HEAD
          <Script
            src='https://unpkg.com/@glidejs/glide'
            strategy='beforeInteractive'
          ></Script>
=======
          <script
            src='https://unpkg.com/@glidejs/glide'
            crossorigin='anonymous'
          ></script>
>>>>>>> pull-branch
          <link
            href='https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp'
            rel='stylesheet'
          ></link>
<<<<<<< HEAD
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
=======
>>>>>>> pull-branch
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
