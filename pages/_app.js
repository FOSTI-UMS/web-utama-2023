import '@/styles/globals.css'
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return <>
    <Script
      src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"
      strategy="beforeInteractive"
    />
    <Component {...pageProps} />
  </>
}
