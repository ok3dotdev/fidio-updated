import Document, { Html, Head, Main, NextScript } from 'next/document'

<<<<<<< HEAD
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet"></link>
      </Head>
      <body className=''>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
=======
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script src="https://unpkg.com/@glidejs/glide" crossorigin="anonymous"></script>
          <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
>>>>>>> upstream/master
