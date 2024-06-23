import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TonConnectButton, useTonAddress, useTonWallet, useTonConnectUI } from "@tonconnect/ui-react";
import { TonClient, Cell, beginCell, toNano } from "@ton/ton";
import { getHttpEndpoint } from '@orbs-network/ton-access';
function App() {
  const [count, setCount] = useState(0),
  [tonConnectUi] = useTonConnectUI();
  const defaultTx = {
    validUntil: Math.floor(Date.now() / 1000) + 600,
    messages: [
        {
            // The receiver's address.
            address: '0:8a5a9c7b70d329be670de4e6cce652d464765114aa98038c66c3d8ceaf2d19b0',
            // Amount to send in nanoTON. For example, 0.005 TON is 5000000 nanoTON.
            amount: '1000000',
            // (optional) State initialization in boc base64 format.
            stateInit: 'te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==',
            // (optional) Payload in boc base64 format.
            payload: 'te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g==',
        }

    ],
};
const fun1 = () => {
  setCount((count) => count + 1);
}
/**
 * 发送交易ton
 */
async function transaction() {
  //发送交易
  const transRes = await tonConnectUi.sendTransaction(defaultTx, { "notifications": ['before', 'success', 'error'] });
  // 查询交易结果
  const tonClient = new TonClient({ endpoint: await getHttpEndpoint({ network: 'mainnet' }) });
  const codeCell = Cell.fromBoc(Buffer.from(transRes.boc, 'base64'))[0];
  const hexStr = codeCell.hash();
  try {
      let res = await tonClient.getTransaction(Address.parse(rawAddress), Date.now().toString(), hexStr);
      console.log(res)
  } catch (error) {
      console.log(error)
  }

}
  return (
<>
      <div>
      <TonConnectButton />
      </div>
      <div className="card">
        <button onClick={() => transaction()}>
          发送交易
        </button>
      </div>
  </>
  )

}

export default App
