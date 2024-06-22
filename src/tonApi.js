// src/tonApi.js
import axios from 'axios';

const tonApiToken = 'your_ton_api_token';  // 替换为你的 API 令牌

const tonApi = axios.create({
  baseURL: 'https://tonapi.com/v1',
  headers: {
    'Authorization': `Bearer ${tonApiToken}`
  }
});

export const getTonBalance = async (walletAddress) => {
  try {
    const response = await tonApi.get(`/balance/${walletAddress}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching balance:', error);
    throw error;
  }
};
