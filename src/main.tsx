import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {TonConnectUIProvider,THEME } from "@tonconnect/ui-react";
ReactDOM.createRoot(document.getElementById('root')!).render(
  <TonConnectUIProvider
  manifestUrl="https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json"
  uiPreferences={{ theme: THEME.DARK }}
  walletsListConfiguration={{
    includeWallets: [
      {
        appName: "safepalwallet",
        name: "SafePal",
        imageUrl: "https://s.pvcliping.com/web/public_image/SafePal_x288.png",
        aboutUrl: "https://www.safepal.com/download",
        jsBridgeKey: "safepalwallet",
        platforms: ["ios", "android", "chrome", "firefox"]
      },
      {
        appName: "tonwallet",
        name: "TON Wallet",
        imageUrl: "https://wallet.ton.org/assets/ui/qr-logo.png",
        aboutUrl: "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
        universalLink: "https://wallet.ton.org/ton-connect",
        jsBridgeKey: "tonwallet",
        bridgeUrl: "https://bridge.tonapi.io/bridge",
        platforms: ["chrome", "android"]
      }
    ]
  }}
  actionsConfiguration={{
      twaReturnUrl: 'https://t.me/tc_twa_demo_bot/start'
  }}
>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </TonConnectUIProvider>
)
