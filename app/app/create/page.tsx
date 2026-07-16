'use client';

import { MainLayout } from '@/components/MainLayout';
import { useState } from 'react';
import { useAccount } from 'wagmi';

export default function CreateCoin() {
  const { isConnected } = useAccount();
  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    description: '',
    image: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected) {
      alert('Please connect your wallet first');
      return;
    }
    // TODO: Implement token creation via smart contract
    console.log('Creating coin:', formData);
  };

  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Create a New Coin</h1>
          <p className="text-foreground/60">Launch your meme coin on pump.fun</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Coin Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g., Doge Coin"
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Symbol
            </label>
            <input
              type="text"
              value={formData.symbol}
              onChange={(e) => setFormData({ ...formData, symbol: e.target.value })}
              placeholder="e.g., DOGE"
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Tell us about your coin..."
              rows={4}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary resize-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Image URL
            </label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              placeholder="https://example.com/image.png"
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-secondary hover:bg-secondary/90 text-background font-semibold rounded-lg transition-colors"
            disabled={!isConnected}
          >
            {isConnected ? 'Create Coin' : 'Connect Wallet First'}
          </button>
        </form>
      </div>
    </MainLayout>
  );
}
