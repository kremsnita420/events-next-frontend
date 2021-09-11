import Head from 'next/head'

export default function Layout({ title, keywords, description, children }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='keywords' content='keywords' />

            </Head>
            {children}
        </div>
    )
}

Layout.defaultProps = {
    title: 'Music Events | Find the hottest parties',
    description: 'Find the latest music events',
    keywords: 'music, dj, edm, rock, pop, open air, fresh air'
}
