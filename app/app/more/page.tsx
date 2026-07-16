'use client';

import { MainLayout } from '@/components/MainLayout';

export default function More() {
  return (
    <MainLayout>
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-foreground mb-4">More</h1>
        <p className="text-foreground/60">Coming soon...</p>
      </div>
    </MainLayout>
  );
}
