import { AuthProvider } from '@/context/AuthContext'
import '../styles/globals.css'
import NextNprogress from 'nextjs-progressbar'
function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider>
      <NextNprogress
        options={{ showSpinner: false }}
        color="#FF0000"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
        showSpinner={false}
      />
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
