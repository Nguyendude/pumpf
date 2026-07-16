'use client';

import { MainLayout } from '@/components/MainLayout';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useAccount } from 'wagmi';
import { useState } from 'react';

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

export default function TokenDetail({ params }: { params: { id: string } }) {
  const { isConnected } = useAccount();
  const [buyAmount, setBuyAmount] = useState('');

  const handleBuy = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected) {
      alert('Please connect your wallet first');
      return;
    }
    // TODO: Implement buy logic via smart contract
    console.log('Buying:', buyAmount);
  };

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Token Header */}
        <div className="bg-card border border-border rounded-lg p-8">
          <div className="flex items-start gap-6">
            <div className="w-32 h-32 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex-shrink-0" />
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-foreground mb-2">Doge Token</h1>
              <p className="text-xl text-foreground/60 mb-4">DOGE</p>
              <div className="space-y-2 text-sm">
                <p className="text-foreground/70">
                  <span className="font-semibold text-foreground">Market Cap:</span> $2.1M
                </p>
                <p className="text-foreground/70">
                  <span className="font-semibold text-foreground">Created by:</span> Anonymous Trader (2h ago)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Chart */}
          <div className="col-span-2 bg-card border border-border rounded-lg p-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Price Chart</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="time" stroke="var(--foreground)" opacity={0.5} />
                <YAxis stroke="var(--foreground)" opacity={0.5} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                  }}
                  labelStyle={{ color: 'var(--foreground)' }}
                />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="var(--primary)"
                  dot={{ fill: 'var(--primary)', r: 4 }}
                  activeDot={{ r: 6 }}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Buy Form */}
          <div className="bg-card border border-border rounded-lg p-6 h-fit">
            <h3 className="text-lg font-bold text-foreground mb-6">Buy Token</h3>
            <form onSubmit={handleBuy} className="space-y-4">
              <div>
                <label className="block text-sm text-foreground/70 mb-2">
                  Amount (ETH)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={buyAmount}
                  onChange={(e) => setBuyAmount(e.target.value)}
                  placeholder="0.1"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary"
                  required
                />
              </div>

              <div className="pt-2 border-t border-border">
                <p className="text-sm text-foreground/70 mb-2">You will receive</p>
                <p className="text-2xl font-bold text-primary">~1,000 DOGE</p>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-3 bg-secondary hover:bg-secondary/90 text-background font-semibold rounded-lg transition-colors"
                disabled={!isConnected}
              >
                {isConnected ? 'Buy DOGE' : 'Connect Wallet'}
              </button>
            </form>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-xl font-bold text-foreground mb-6">Comments</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-b border-border pb-4">
                <p className="text-sm text-foreground/70 mb-2">User #{i}</p>
                <p className="text-foreground">This is a great token!</p>
              </div>
            ))}
          </div>

          <form className="mt-6 space-y-4">
            <textarea
              placeholder="Write a comment..."
              rows={3}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary resize-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-semibold"
            >
              Post Comment
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
