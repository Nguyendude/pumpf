# pump.fun - DeFi Meme Coin Launchpad

A full-stack DeFi application featuring a pump.fun-style frontend for creating and trading meme coins on Robinhood Chain Testnet and Base Sepolia. Built with Next.js 16 and integrated with Solidity smart contracts.

**EVM Pumpfun Smart Contracts**: Fork of pump.fun bonding curve logic for meme coin launch pad (supports Monada, Base, BNB, Ethereum Layer 2/X-Layer) - Solidity Smart Contract for ape.store.

## Quick Start

### Installation

```bash
# Install all dependencies
npm install

# Start frontend dev server
npm run dev
```

The frontend will be available at `http://localhost:3000`

## Project Structure

```
.
├── /app                    # Next.js 16 frontend (React 19.2)
│   ├── app/                # Next.js app directory with pages
│   ├── components/         # Reusable React components
│   ├── config/             # Configuration (wagmi blockchain config)
│   ├── public/             # Static assets & token images
│   └── package.json        # Frontend dependencies
├── /contracts             # Solidity smart contracts (Hardhat)
├── /test                  # Smart contract tests
├── hardhat.config.ts      # Hardhat configuration
└── package.json           # Root monorepo config
```

## Frontend Features

### 🎨 **Landing & Discovery**
- Dashboard with trending meme coins
- Real-time token search functionality
- Token cards displaying market cap, description, and engagement
- "Now Trending" section with 3-column responsive grid

### 📊 **Token Details Page**
- Live price chart with Recharts
- Buy/sell trading interface (ready for smart contract integration)
- Comments section for community engagement
- One-click navigation from home

### 🚀 **Coin Creation**
- Form to launch new tokens with custom metadata
- Fields for coin name, symbol, description, and image
- Integration ready with TokenFactory smart contract
- Wallet connection validation

### 🧭 **Navigation & UI**
- Fixed left sidebar with menu (Home, Advanced, Watch Live, Support, More)
- Top header with trending token ticker
- Action buttons (Create new coin, Log In)
- Responsive design optimized for 1280px+ displays
- Dark theme with teal accents and green CTAs

## Tech Stack

### Frontend
- **Framework**: Next.js 16 with App Router
- **Runtime**: React 19.2.4 with Server Components
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Web3**: wagmi v3.7.1 for blockchain interaction
- **Visualization**: Recharts v3.9.2 for price charts
- **Icons**: Lucide React
- **UI Patterns**: shadcn-style custom components

### Smart Contracts
- **Language**: Solidity
- **Framework**: Hardhat
- **Dependencies**: OpenZeppelin Contracts v5
- **Target Networks**: Robinhood Chain Testnet (46630), Base Sepolia

## Design System

**Color Palette:**
- **Background**: `#0f172a` (dark slate)
- **Cards**: `#1e293b` (slate-800)
- **Primary**: `#14b8a6` (teal - accents)
- **Secondary**: `#22c55e` (green - CTAs)
- **Border**: `#334155` (slate-700)
- **Text**: `#f1f5f9` (light gray)

**Typography**: Geist font family for consistent, modern look

## Environment Variables

Create `.env.local` in the `/app` directory:

```env
# Optional: WalletConnect Project ID
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id
```

Network endpoints are pre-configured in `/app/config/wagmi.ts`

## Key Components

| Component | Purpose |
|-----------|---------|
| `Sidebar.tsx` | Left navigation with active route highlighting |
| `Header.tsx` | Top bar with trending tokens ticker |
| `TokenCard.tsx` | Reusable card for token information |
| `MainLayout.tsx` | Layout wrapper combining sidebar + header |
| `/app/page.tsx` | Home page with trending tokens grid |
| `/app/token/[id]/page.tsx` | Token detail with chart & trading |
| `/app/create/page.tsx` | Form to launch new tokens |

## Smart Contract Integration

The frontend is configured and ready to integrate with:

1. **TokenFactory.sol** - Creates new meme coins
2. **PumpFun.sol** - Handles trading and bonding curve logic

### To Connect Smart Contracts:

1. Deploy contracts to Robinhood Chain Testnet or Base Sepolia
2. Export contract ABIs as JSON files
3. Update contract addresses in `/app/config/wagmi.ts`
4. Use wagmi hooks in components:
   ```tsx
   import { useContractRead, useContractWrite } from 'wagmi';
   
   // Read token data
   const { data } = useContractRead({
     address: tokenAddress,
     abi: TokenABI,
     functionName: 'balanceOf',
     args: [userAddress],
   });
   ```

## Development

### Available Scripts

```bash
npm run dev      # Start Next.js dev server
npm run build    # Production build
npm run start    # Start production server
```

### Building & Deploying

**Frontend (Vercel - Recommended):**
```bash
# Push code to GitHub, connect to Vercel for auto-deployment
vercel deploy
```

**Smart Contracts (Hardhat):**
```bash
npx hardhat compile    # Compile contracts
npx hardhat test       # Run tests
npx hardhat deploy     # Deploy to testnet
```

## Supported Networks

| Network | Chain ID | RPC Endpoint |
|---------|----------|--------------|
| Robinhood Chain Testnet | 46630 | `https://rpc.testnet.chain.robinhood.com` |
| Base Sepolia | 84532 | Configured via wagmi |

## Future Enhancements

- [ ] Real blockchain data integration
- [ ] Advanced wallet connections (RainbowKit)
- [ ] User authentication & portfolios
- [ ] Limit orders & slippage tolerance
- [ ] Detailed market analytics
- [ ] Mobile responsiveness improvements
- [ ] Mobile app (React Native)

## Contact & Support

For questions about the smart contracts, contact: [Telegram](https://t.me/satscorder) | [Twitter](https://x.com/satcorder33)

For frontend issues, open an issue in the repository.

## License

ISC
