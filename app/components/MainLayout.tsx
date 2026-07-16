'use client';

import { Sidebar } from './Sidebar';
import { Header } from './Header';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-1 md:ml-48">
        <Header />
        <main className="pt-20 md:pt-24 pb-6 px-4 md:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
