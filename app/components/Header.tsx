'use client';

import Link from 'next/link';
import { MobileNav } from './MobileNav';

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
    <header className="fixed top-0 right-0 md:left-48 left-0 bg-card border-b border-border flex items-center justify-between px-3 md:px-6 py-3 md:py-4 z-40 h-20">
      {/* Mobile nav */}
      <MobileNav />

      {/* Trending tokens - hidden on small screens */}
      <div className="hidden sm:flex gap-2 md:gap-3 items-center flex-1 md:ml-4">
        {trendingTokens.map((token) => (
          <div key={token.symbol} className="flex items-center gap-2 px-2 md:px-3 py-2 bg-background/50 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer text-xs md:text-sm">
            <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-r flex-shrink-0 ${token.color || 'from-slate-500 to-slate-600'}`} />
            <div className="hidden md:block">
              <div className="font-semibold text-foreground">{token.symbol}</div>
              <div className="text-xs text-foreground/50">market cap: {token.marketCap}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Wallet and CTA buttons */}
      <div className="flex gap-2 md:gap-3 items-center ml-auto">
        <Link
          href="/create"
          className="hidden md:block px-3 md:px-4 py-2 bg-secondary hover:bg-secondary/90 text-background font-semibold rounded-lg transition-colors text-sm"
        >
          Create new coin
        </Link>
        <button className="px-3 md:px-4 py-2 bg-primary hover:bg-primary-dark text-background font-semibold rounded-lg transition-colors text-sm">
          Log In
        </button>
      </div>
    </header>
  );
}
