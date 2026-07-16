import { createConfig, http } from 'wagmi';
import {
  arbitrumSepolia,
  baseSepolia,
} from 'wagmi/chains';

// Robinhood Chain Testnet configuration
const robinhoodChainTestnet = {
  id: 46630,
  name: 'Robinhood Chain Testnet',
  network: 'robinhood-testnet',
  nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc.testnet.chain.robinhood.com'] },
    public: { http: ['https://rpc.testnet.chain.robinhood.com'] },
  },
  blockExplorers: {
    default: { name: 'Block Scout', url: 'https://explorer.testnet.chain.robinhood.com' },
  },
} as const;

export const config = createConfig({
  chains: [baseSepolia, arbitrumSepolia, robinhoodChainTestnet as any],
  transports: {
    [baseSepolia.id]: http(),
    [arbitrumSepolia.id]: http(),
    [robinhoodChainTestnet.id]: http('https://rpc.testnet.chain.robinhood.com'),
  },
});
