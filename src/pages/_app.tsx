import { AppProps } from "next/app"
import Layout from "../components/Layout"
import '../styles/globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}