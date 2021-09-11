import Head from 'next/head'

//components
import Header from './Header'

import styles from '../styles/Layout.module.css'
import Footer from './Footer'

export default function Layout({ title, keywords, description, children }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='keywords' content={keywords} />
				<meta name='description' content={description} />
			</Head>
			<Header />
			<div className={styles.container}>{children}</div>
			<Footer />
		</div>
	)
}

Layout.defaultProps = {
	title: 'Music Events | Find the hottest parties',
	description: 'Find the latest music events',
	keywords: 'music, dj, edm, rock, pop, open air, fresh air'
}
