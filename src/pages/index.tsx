import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import credentials from '../../credentials'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props: any) {
	
	return (
		<>
			<Head>
				<title>{credentials.platform.title}</title>
				<meta name="description" content={credentials.platform.description} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={`${styles.main} ${inter.className} ${props.hiddenDev === false ? `${styles.hidden}` : null}`}>
				<div className={styles.center} style={{ display: 'flex', flexDirection: 'column' }}>
					<h1 className={`${styles.text10}`}>{credentials.platform.title}</h1>
					<div className={`${styles.maxWidth600}`} style={{ textAlign: 'center' }}>
						<div className={`${styles.description}`}>{credentials.platform.description}</div>
					</div>
				</div>
				<div className={`${styles.textp75}`}>{credentials.platform.contact.admin}</div>
			</main>
		</>
	)
}
