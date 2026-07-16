'use client';

import Image from 'next/image';
import Link from 'next/link';

interface TokenCardProps {
  id: string;
  symbol: string;
  name: string;
  description: string;
  image: string;
  marketCap: string;
  replies: number;
  createdBy: string;
  timeAgo: string;
}

export function TokenCard({
  id,
  symbol,
  name,
  description,
  image,
  marketCap,
  replies,
  createdBy,
  timeAgo,
}: TokenCardProps) {
  return (
    <Link href={`/token/${id}`}>
      <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer h-full">
        {/* Image */}
        <div className="relative w-full h-32 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center overflow-hidden">
          <div className="relative w-20 h-20">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover rounded-lg"
              sizes="80px"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-3 space-y-2">
          <div>
            <h3 className="font-bold text-foreground text-base leading-tight line-clamp-1">
              {name}
            </h3>
            <p className="text-xs text-foreground/70">{symbol}</p>
          </div>

          <p className="text-xs text-foreground/60 line-clamp-1">
            {description}
          </p>

          <div className="flex justify-between items-start text-xs text-foreground/50">
            <div className="space-y-1">
              <p className="font-semibold text-primary">market cap: {marketCap}</p>
              <p>replies: {replies}</p>
            </div>
          </div>

          <div className="border-t border-border pt-2 text-xs text-foreground/50 space-y-0.5">
            <p className="line-clamp-1">created by: {createdBy}</p>
            <p>{timeAgo}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
