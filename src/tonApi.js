// src/tonApi.js
import axios from 'axios';

const tonApiToken = '999ad2662b7e545a3370cde704d3c59e987c3d265c0c9b49a8675c2cd3005d7b';  // 替换为你的 API 令牌

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
