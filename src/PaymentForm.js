// src/PaymentForm.js
import React, { useState } from 'react';
import { getTonBalance } from './tonApi';

const PaymentForm = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [balance, setBalance] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await getTonBalance(walletAddress);
      setBalance(result.balance);
    } catch (error) {
      console.error('Error fetching balance:', error);
    }
  };

  return (
    <div>
      <h1>TON Payment</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Wallet Address:
          <input
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
        </label>
        <button type="submit">Check Balance</button>
      </form>
      {balance !== null && (
        <div>
          <h2>Balance: {balance} TON</h2>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
