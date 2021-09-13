import Link from 'next/link'
import styles from '@/styles/Footer.module.css'

export default function Footer() {
	const yearOnly = { year: 'numeric' }
	return (
		<footer className={styles.footer}>
			<p>
				Copyright &copy; Music events{' '}
				{new Date().toLocaleDateString('en-GB', yearOnly)}
			</p>
			<p>
				<Link href='/about'>About this Project</Link>
			</p>
		</footer>
	)
}
