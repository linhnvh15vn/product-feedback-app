'use client';

import React from 'react';

import { usePathname } from 'next/navigation';

import Navigation from '@/components/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    pathname === '/suggestion' && (
      <header className="sticky top-0 md:hidden">
        <div className="container flex h-[72px] items-center justify-between bg-header-mobile">
          <div className="text-white">
            <h4>Frontend Mentor</h4>
            <span className="text-xs font-medium opacity-75">
              Feedback Board
            </span>
          </div>
          <Navigation />
        </div>
      </header>
    )
  );
}
