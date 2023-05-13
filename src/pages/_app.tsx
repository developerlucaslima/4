import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import logoImg from "../assets/logo.svg" 
import { Conainter, Header } from "../styles/pages/app"

globalStyles()
function App({ Component, pageProps }: AppProps) {
  return(
    <Conainter>
      <Header>
        <img src={logoImg.src} alt="Logo Ignite" />
      </Header>
      <Component {...pageProps} />
    </Conainter>
  ) 
}

export default App