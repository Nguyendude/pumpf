'use client';

import { MainLayout } from '@/components/MainLayout';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useAccount } from 'wagmi';
import { useState } from 'react';
import { Share2, Tag, TrendingUp, TrendingDown } from 'lucide-react';

// Mock price data
const chartData = [
  { time: '00:00', price: 100 },
  { time: '04:00', price: 120 },
  { time: '08:00', price: 150 },
  { time: '12:00', price: 130 },
  { time: '16:00', price: 180 },
  { time: '20:00', price: 200 },
  { time: '24:00', price: 220 },
];

const holders = [
  { address: 'xCC_...TkJQ', supply: '1.16%', mcap: '$8.39M', pnl: '-$26.75K' },
  { address: 'enteriorcarb462', supply: '1.15%', mcap: '-', pnl: '-' },
  { address: '4iJUI_bake', supply: '0.95%', mcap: '$2.69K', pnl: '+$58.33K' },
  { address: 'ASTy_JsZZ', supply: '0.73%', mcap: '-', pnl: '-' },
];

const bounties = [
  { name: 'The $10K Venomweaver Bounty', reward: '777.8K TqjI', status: 'active' },
];

const stats = [
  { label: 'Price change', value: '-16.6%', positive: false },
  { label: 'Volume', value: '$391K', positive: true },
  { label: 'Price high', value: '$541.8K', positive: false },
  { label: 'Price low', value: '$101.1M', positive: true },
];

export default function TokenDetail({ params }: { params: { id: string } }) {
  const { isConnected } = useAccount();
  const [buyAmount, setBuyAmount] = useState('');

  const handleBuy = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected) {
      alert('Please connect your wallet first');
      return;
    }
    console.log('Buying:', buyAmount);
  };

  return (
    <MainLayout>
      <div className="space-y-2">
        {/* Header with token info and buttons */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pb-2">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-slate-700 to-slate-900 rounded flex-shrink-0" />
            <div className="flex-1">
              <h1 className="text-lg md:text-xl font-bold text-foreground">Kintara</h1>
              <p className="text-xs md:text-sm text-foreground/60">SKINS</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <button className="px-2 md:px-3 py-1 md:py-1.5 bg-primary/10 hover:bg-primary/20 text-primary rounded text-xs md:text-sm font-medium transition-colors">
              Share
            </button>
            <button className="px-2 md:px-3 py-1 md:py-1.5 bg-primary/10 hover:bg-primary/20 text-primary rounded text-xs md:text-sm font-medium transition-colors">
              Tag
            </button>
            <button className="px-3 md:px-4 py-1 md:py-1.5 bg-secondary hover:bg-secondary/90 text-background rounded text-xs md:text-sm font-semibold transition-colors">
              Buy
            </button>
            <button className="px-3 md:px-4 py-1 md:py-1.5 border border-border text-foreground rounded text-xs md:text-sm font-medium hover:bg-border/50 transition-colors">
              Sell
            </button>
          </div>
        </div>

        {/* Price section */}
        <div className="flex items-baseline gap-2 md:gap-3 pb-1 text-xs md:text-sm">
          <span className="text-2xl md:text-3xl font-bold text-foreground">$6.06M</span>
          <span className="text-red-500 font-semibold">-$1.20M (-16.57%)</span>
          <span className="text-foreground/50">24h</span>
          <span className="ml-auto text-foreground/70">ATH <span className="text-foreground font-semibold">$22.9M</span></span>
        </div>

        {/* Trending article banner */}
        <div className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded px-3 py-2 text-xs md:text-sm mb-2">
          <div className="flex items-start gap-2">
            <span className="text-primary font-semibold">TRENDING ARTICLE</span>
            <span className="text-foreground/60">18D AGO</span>
            <span className="ml-auto text-primary cursor-pointer hover:underline">Read</span>
          </div>
          <p className="text-foreground font-medium mt-1">Welcome to Kintara</p>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {/* Left section - Chart and holders */}
          <div className="lg:col-span-2 space-y-2">
            {/* Chart section */}
            <div className="bg-card border border-border rounded p-3 md:p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-xs text-foreground/60">KINS / USD Market Cap (USD)</p>
                  <p className="text-xs md:text-sm text-foreground/70">1D • PUMP</p>
                </div>
                <div className="flex gap-1 text-xs">
                  <button className="px-1.5 py-0.5 hover:bg-border rounded">D</button>
                  <button className="px-1.5 py-0.5 hover:bg-border rounded">H</button>
                  <button className="px-1.5 py-0.5 hover:bg-border rounded">Trade Display</button>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="time" stroke="var(--foreground)" opacity={0.3} tick={{ fontSize: 12 }} />
                  <YAxis stroke="var(--foreground)" opacity={0.3} tick={{ fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: '6px',
                    }}
                    labelStyle={{ color: 'var(--foreground)' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="var(--primary)"
                    dot={false}
                    strokeWidth={1.5}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* About section */}
            <div className="bg-card border border-border rounded p-3 md:p-4">
              <h3 className="text-sm font-bold text-foreground mb-2">About SKINS</h3>
              <p className="text-xs text-foreground/70 leading-relaxed">
                A player ground spiders in a browser MMO until a Lightning Cage dropped, then sold it for $1,900 in a single day. Within seven weeks of launch, Kintara's total player earnings crossed $100,000 across 228,015 marketplace sales, before most of crypto even knew the game existed.
              </p>
            </div>

            {/* Holders section */}
            <div className="bg-card border border-border rounded p-3 md:p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-foreground">Holders</h3>
                <span className="text-xs text-foreground/50">24.2K</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead className="border-b border-border text-foreground/60">
                    <tr>
                      <th className="text-left py-1.5 px-1">Holder</th>
                      <th className="text-right py-1.5 px-1">% of supply</th>
                      <th className="text-right py-1.5 px-1">Entry mcap</th>
                      <th className="text-right py-1.5 px-1">PnL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {holders.map((holder, i) => (
                      <tr key={i} className="border-b border-border/50">
                        <td className="py-1.5 px-1 text-foreground/80">{holder.address}</td>
                        <td className="text-right py-1.5 px-1 text-foreground/70">{holder.supply}</td>
                        <td className="text-right py-1.5 px-1 text-foreground/70">{holder.mcap}</td>
                        <td className={`text-right py-1.5 px-1 font-medium ${holder.pnl.includes('+') ? 'text-secondary' : 'text-red-500'}`}>
                          {holder.pnl}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="space-y-2">
            {/* Buy section */}
            <div className="bg-card border border-border rounded p-3">
              <button className="w-full px-2 py-1.5 bg-secondary hover:bg-secondary/90 text-background rounded font-semibold text-sm transition-colors mb-2">
                Connect wallet to trade
              </button>
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between p-1.5 bg-background/50 rounded hover:bg-background cursor-pointer">
                  <span className="text-foreground/70">$25</span>
                  <span className="text-foreground/50">25%</span>
                </div>
                <div className="flex items-center justify-between p-1.5 bg-background/50 rounded hover:bg-background cursor-pointer">
                  <span className="text-foreground/70">$100</span>
                  <span className="text-foreground/50">50%</span>
                </div>
                <div className="flex items-center justify-between p-1.5 bg-background/50 rounded hover:bg-background cursor-pointer">
                  <span className="text-foreground/70">$250</span>
                  <span className="text-foreground/50">100%</span>
                </div>
              </div>
            </div>

            {/* Bounties */}
            <div className="bg-card border border-border rounded p-3">
              <h4 className="text-xs font-bold text-foreground mb-2">Bounties</h4>
              <p className="text-xs text-foreground/70 mb-2">1 in this ecosystem</p>
              {bounties.map((bounty, i) => (
                <div key={i} className="p-2 bg-background/50 rounded text-xs">
                  <p className="font-medium text-foreground">{bounty.name}</p>
                  <p className="text-foreground/70 text-xs">REWARD: {bounty.reward}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="bg-card border border-border rounded p-3">
              <h4 className="text-xs font-bold text-foreground mb-2 flex items-center justify-between">
                Stats
                <span className="text-xs font-normal text-foreground/60">5m 1h 6h 24h</span>
              </h4>
              <div className="space-y-1.5">
                {stats.map((stat, i) => (
                  <div key={i} className="text-xs">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-foreground/70">{stat.label}</span>
                      <span className={`font-medium ${stat.positive ? 'text-secondary' : 'text-red-500'}`}>
                        {stat.value}
                      </span>
                    </div>
                    <div className="w-full bg-background rounded h-1">
                      <div className={`h-full rounded w-1/2 ${stat.positive ? 'bg-secondary' : 'bg-red-500'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Audit */}
            <div className="bg-card border border-border rounded p-3">
              <h4 className="text-xs font-bold text-foreground mb-2">Audit</h4>
              <div className="grid grid-cols-3 gap-2 text-xs text-center">
                <div className="p-1.5 bg-background/50 rounded">
                  <p className="text-foreground/60 text-xs">Holders</p>
                  <p className="font-semibold text-foreground">24,238</p>
                </div>
                <div className="p-1.5 bg-background/50 rounded">
                  <p className="text-foreground/60 text-xs">Top 10</p>
                  <p className="font-semibold text-foreground">7.2%</p>
                </div>
                <div className="p-1.5 bg-background/50 rounded">
                  <p className="text-foreground/60 text-xs">Dev</p>
                  <p className="font-semibold text-foreground">0.2%</p>
                </div>
              </div>
            </div>

            {/* Creator rewards */}
            <div className="bg-card border border-border rounded p-3">
              <h4 className="text-xs font-bold text-foreground mb-2">Creator rewards</h4>
              <div className="p-2 bg-background/50 rounded text-xs">
                <p className="text-foreground/70">turbosealsascul</p>
                <p className="text-secondary font-medium">0.00%</p>
              </div>
            </div>

            {/* Bonding curve */}
            <div className="bg-card border border-border rounded p-3">
              <h4 className="text-xs font-bold text-foreground mb-2">Bonding curve progress</h4>
              <div className="w-full bg-background rounded h-1.5 mb-2">
                <div className="h-full bg-secondary rounded w-full" />
              </div>
              <p className="text-xs text-foreground/70">100.0%</p>
              <p className="text-xs text-foreground/70">Coin has graduated!</p>
            </div>
          </div>
        </div>

        {/* Comments section */}
        <div className="bg-card border border-border rounded p-3 md:p-4 mt-2">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-foreground">Live Chat</h3>
            <button className="text-xs text-primary hover:underline">Trades</button>
          </div>
          <div className="space-y-2 mb-3 max-h-48 overflow-y-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-xs border-b border-border/50 pb-2">
                <p className="text-foreground/60">User #{i}</p>
                <p className="text-foreground">Great token, love the project!</p>
              </div>
            ))}
          </div>
          <form className="space-y-2">
            <textarea
              placeholder="Post a reply"
              rows={1}
              className="w-full px-2 py-1.5 bg-background border border-border rounded text-xs text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary resize-none"
            />
            <button
              type="submit"
              className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium hover:bg-primary/20 transition-colors"
            >
              Post a reply
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
