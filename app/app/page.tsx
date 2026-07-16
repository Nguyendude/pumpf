'use client';

import { MainLayout } from '@/components/MainLayout';
import { TokenCard } from '@/components/TokenCard';
import { Search } from 'lucide-react';
import { useState } from 'react';

// Mock data for trending tokens
const trendingTokens = [
  {
    id: '1',
    symbol: 'MOG/ACC',
    name: 'mog/acc',
    description: 'mog/acc Rallies as Mog Coin Bot Start New PFP Trend',
    image: '/mog.png',
    marketCap: '$2.1M',
    replies: 543,
    createdBy: 'DeMMoGy (19m ago)',
    timeAgo: '19m ago',
  },
  {
    id: '2',
    symbol: 'BWAH',
    name: 'Bitcoin Wizard Apple Hurler (BWAH)',
    description: 'Dev Sells on Stream, Falls out of Chair, Trenches Take Over',
    image: '/bwah.png',
    marketCap: '$591.4K',
    replies: 523,
    createdBy: 'F93BA (18m ago)',
    timeAgo: '18m ago',
  },
  {
    id: '3',
    symbol: 'CHILLHOUSE',
    name: 'Chill House (CHILLHOUSE)',
    description: 'Crypto Twitter Merges Household Chill Guy',
    image: '/chill.png',
    marketCap: '$176K',
    replies: 176,
    createdBy: 'CryptoCreator',
    timeAgo: '2h ago',
  },
  {
    id: '4',
    symbol: 'ELECTED',
    name: 'Conclave (Elected):',
    description: 'created by:',
    image: '/elected.png',
    marketCap: '$9.9K',
    replies: 9,
    createdBy: 'DeMaGy (19m ago)',
    timeAgo: '19m ago',
  },
  {
    id: '5',
    symbol: 'CAT',
    name: "Nobody knows you're a cat (CAT)",
    description: 'created by:',
    image: '/cat.png',
    marketCap: '$277.7K',
    replies: 2,
    createdBy: 'F93BA (18m ago)',
    timeAgo: '18m ago',
  },
  {
    id: '6',
    symbol: 'MOG',
    name: 'Making Outrageous Gains (MOG)',
    description: 'created by:',
    image: '/mog2.png',
    marketCap: '$6.4K',
    replies: 5,
    createdBy: 'J6mVy (15m ago)',
    timeAgo: '15m ago',
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAnimations, setShowAnimations] = useState(true);
  const [includeNSFW, setIncludeNSFW] = useState(false);

  const filteredTokens = trendingTokens.filter(token =>
    token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    token.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="mb-6 md:mb-8">
        <div className="space-y-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-1">
              Fun & real time <span className="text-foreground/60">graph</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 flex items-center gap-2">
              with <div className="w-5 h-5 md:w-6 md:h-6 bg-primary rounded-full" /> pump.fun
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-card border border-border rounded-lg px-3 md:px-4 py-2.5 md:py-3 flex items-center gap-2 md:gap-3">
            <Search size={18} className="text-foreground/50 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search for token"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-sm md:text-base text-foreground placeholder-foreground/50"
            />
            <button className="px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-semibold text-sm">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Trending Section */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
            <span>🔥</span> Now Trending
          </h2>
          <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showAnimations}
                onChange={(e) => setShowAnimations(e.target.checked)}
                className="w-3.5 h-3.5 md:w-4 md:h-4"
              />
              <span className="text-foreground/70">Show animations</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={includeNSFW}
                onChange={(e) => setIncludeNSFW(e.target.checked)}
                className="w-3.5 h-3.5 md:w-4 md:h-4"
              />
              <span className="text-foreground/70">Include nsfw</span>
            </label>
          </div>
        </div>

        {/* Token Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {filteredTokens.map((token) => (
            <TokenCard key={token.id} {...token} />
          ))}
        </div>

        {filteredTokens.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground/50 text-lg">No tokens found</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
