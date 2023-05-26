import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import cStyles from '../styles/MyStyles.module.css'
import credentials from '../../credentials'
import modules from '@modules'


export default function Home(props) {
	console.log('Modules', modules)

	const overlayStyle = {
		content: '""',
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
	}
	
	return (
		<>
			<Head>
				<title>{credentials.platform.title}</title>
				<meta name="description" content={credentials.platform.description} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={`${styles.main} ${styles.backgroundLeftRightSplash} ${cStyles.backgroundLeftRightSplash} ${props.hiddenDev === false ? `${styles.hidden}` : null}`} style={{ backgroundImage: `url('img/SharonRose_a_naturally_lit_white_studio_stage_with_studio_portr_2d1bd7e1-6329-4607-b3d5-a417dd6b527a.png')`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
				<div className={`${styles.splashFlex} ${styles.leftBlackRightPhotoGradient}`} style={overlayStyle}>
					<div className={`${styles.safeSpace} ${styles.flex} ${styles.twoBodyFlex} ${styles.spaceBetween}`}>
						<div>
							<div className={`${cStyles.homeSplashBgImgStyle}`}>
								<div className={`${styles.homeTitleSplash}`}><h1 className={`${styles.text7}`}>{credentials.platform.title}</h1></div>
								<div>
									<div className={`${styles.description} ${styles.text1} ${styles.marginTop5Adj}`}>{credentials.platform.cta.lead}</div>
									<div className={`${styles.maxWidth600} ${styles.marginTop2Adj}`}>
										<div className={`${styles.description} ${styles.text3Adj} ${styles.weight700}`}>{credentials.platform.description}</div>
									</div>
								</div>
							</div>
						</div>
						<div>

						</div>
					</div>
					<div className={`${styles.textp75}`}>{credentials.platform.contact.admin}</div>
				</div>
			</main>
		</>
	)
}
