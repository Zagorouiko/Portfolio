import React from 'react'
import ReactDOM from 'react-dom/client'
import NFTpage from './routes/NFTpage.jsx'
import Root from "./routes/Root.jsx"
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'
import { smartWallet, ThirdwebProvider, embeddedWallet, metamaskWallet } from "@thirdweb-dev/react"
import { Sepolia } from "@thirdweb-dev/chains"
import { TerminalContextProvider } from "react-terminal"
import DOOMpage from './routes/DOOMpage.jsx'
import NotFound from './routes/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/nfts",
    element: <NFTpage />,
  },
  {
    path: "/doom",
    element: <DOOMpage/>,
  },
  {
    path: "*", 
    element: <NotFound />,
  }
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.studio.thegraph.com/query/41467/portfolio/0.0.3"
})

const smartWalletConfig = {
  factoryAddress: "0x01f2F087cE7B22a6934AF909c2B025ECc5f822c6",
  gasless: true,
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThirdwebProvider 
      activeChain={Sepolia}
      clientId={import.meta.env.VITE_PUBLIC_THIRDWEB_CLIENTID}
      supportedWallets={[
        smartWallet(embeddedWallet(), smartWalletConfig),
        smartWallet(metamaskWallet(), smartWalletConfig)
      ]}
      // autoConnect={autoConnect}
      >
        <TerminalContextProvider>
          <RouterProvider router={router} />
        </TerminalContextProvider>
      </ThirdwebProvider>
    </ApolloProvider>
  </React.StrictMode>,
)