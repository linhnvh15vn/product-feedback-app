import React from 'react';

import Header from '@/components/header';
import HeaderTablet from '@/components/header-tablet';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      <HeaderTablet />
      {children}
    </div>
  );
}
