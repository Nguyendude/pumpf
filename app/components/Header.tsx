'use client';

import Link from 'next/link';

interface TrendingToken {
  symbol: string;
  name: string;
  marketCap: string;
  color?: string;
}

const trendingTokens: TrendingToken[] = [
  { symbol: 'MOG/acc', name: 'Mog Guy (MOGGUY)', marketCap: '$5.8B', color: 'from-orange-500 to-yellow-500' },
  { symbol: 'tdog', name: 'thedog.fun (thedog)', marketCap: '$4.1B', color: 'from-purple-500 to-pink-500' },
];

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-64 h-24 bg-card border-b border-border flex items-center justify-between px-8 z-40">
      {/* Trending tokens */}
      <div className="flex gap-3 items-center flex-1">
        {trendingTokens.map((token) => (
          <div key={token.symbol} className="flex items-center gap-2 px-3 py-2 bg-background/50 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
            <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${token.color || 'from-slate-500 to-slate-600'}`} />
            <div className="text-sm">
              <div className="font-semibold text-foreground">{token.symbol}</div>
              <div className="text-xs text-foreground/50">market cap: {token.marketCap}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Wallet and CTA buttons */}
      <div className="flex gap-3 items-center">
        <Link
          href="/create"
          className="px-4 py-2 bg-secondary hover:bg-secondary/90 text-background font-semibold rounded-lg transition-colors"
        >
          Create new coin
        </Link>
        <button className="px-4 py-2 bg-primary hover:bg-primary-dark text-background font-semibold rounded-lg transition-colors">
          Log In
        </button>
      </div>
    </header>
  );
}
