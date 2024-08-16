import React from 'react';

import Navigation from '@/components/navigation';

export default function Header() {
  return (
    <header className="md:hidden">
      <div className="container flex h-[72px] items-center justify-between bg-header-mobile">
        <div>
          <h4>Frontend Mentor</h4>
          <span className="text-xs font-medium">Feedback Board</span>
        </div>
        <Navigation />
      </div>
    </header>
  );
}
