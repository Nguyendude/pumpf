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
    <aside className="hidden md:flex w-48 bg-card border-r border-border h-screen fixed left-0 top-0 flex-col pt-6 z-50">
      {/* Logo */}
      <div className="px-4 mb-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-sm">
          <div className="w-5 h-5 bg-primary rounded-full flex-shrink-0" />
          <span className="text-foreground truncate">pump.fun</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-foreground/70 hover:bg-border hover:text-foreground'
              }`}
            >
              <Icon size={18} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-border p-3">
        <p className="text-xs text-foreground/50">v1.0</p>
      </div>
    </aside>
  );
}
