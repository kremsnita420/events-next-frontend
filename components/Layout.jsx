import Head from 'next/head'
import { useRouter } from 'next/router'
//components
import Header from './Header'

import styles from '@/styles/Layout.module.css'
import Footer from './Footer'
import Showcase from './Showcase'

import previewImage from '/images/sample/event1.jpg'

export default function Layout({ title, keywords, description, children }) {
	const router = useRouter()

	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='keywords' content={keywords} />
				<meta name='description' content={description} />
				<meta
					property='og:image'
					content={previewImage}
					key='ogimage'
				/>
			</Head>
			<Header />
			{router.pathname === '/' && <Showcase />}
			<div className={styles.container}>{children}</div>
			<Footer />
		</div>
	)
}

Layout.defaultProps = {
	title: 'Music Events | Find the hottest parties',
	description: 'Find the latest music events',
	keywords: 'music, dj, edm, rock, pop, open air, fresh air',
}
