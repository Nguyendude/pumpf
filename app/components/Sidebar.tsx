'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Zap, Eye, HelpCircle, MoreHorizontal } from 'lucide-react';

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/advanced', icon: Zap, label: 'Advanced' },
  { href: '/watch-live', icon: Eye, label: 'Watch Live' },
  { href: '/support', icon: HelpCircle, label: 'Support' },
  { href: '/more', icon: MoreHorizontal, label: 'More' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-card border-r border-border h-screen fixed left-0 top-0 flex flex-col pt-8">
      {/* Logo */}
      <div className="px-6 mb-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <div className="w-6 h-6 bg-primary rounded-full" />
          <span className="text-foreground">pump.fun</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 px-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-foreground/70 hover:bg-card-lighter hover:text-foreground'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-border p-4 space-y-2">
        <p className="text-xs text-foreground/50">v1.0</p>
      </div>
    </aside>
  );
}
