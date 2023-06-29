import FoodProvider from "../context/FoodProvider"
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <FoodProvider>
      <Component {...pageProps} />
    </FoodProvider>
  )
}
