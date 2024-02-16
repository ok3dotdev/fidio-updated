import Document, { Html, Head, Main, NextScript } from 'next/document'
import { SliderStyles, SliderTheme, GoogleFontsLink, PaystackScript } from '/modules/internal/localImports'

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					{ SliderStyles }
					{ SliderTheme }
					{ GoogleFontsLink }
					{ PaystackScript }
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
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-B57K7JWE6J'
          ></script>
          <link
            href='https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap'
            rel='stylesheet'
          ></link>
				</Head>
				<body>
					<div version='0.3.84' business='Tycoon Systems Corp.' style={{ display: 'none' }}></div>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument


{/* <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-B57K7JWE6J'
          ></script>
          <Script src='https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js'></Script>
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
          <Script
            src='https://unpkg.com/@glidejs/glide'
            crossorigin='anonymous'
            strategy='beforeInteractive'
          ></Script>
          <link
            href='https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp'
            rel='stylesheet'
          ></link>
          <link
            href='https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap' */}
          //   rel='stylesheet'
          // ></link>