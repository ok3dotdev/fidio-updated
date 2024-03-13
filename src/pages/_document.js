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
					<div version='0.4.17' business='Tycoon Systems Corp.' style={{ display: 'none' }}></div>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument