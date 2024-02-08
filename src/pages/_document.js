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
					<div version='0.3.77' business='Tycoon Systems Corp.' style={{ display: 'none' }}></div>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
