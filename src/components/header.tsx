import React from 'react';

import { Menu } from 'lucide-react';

import Navigation from '@/components/navigation';

interface Props {
  // Add your component props here
}

export default function Header(props: Props) {
  return (
    <header>
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
