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
