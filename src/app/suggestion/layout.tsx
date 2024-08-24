import React from 'react';

import Header from '@/components/header';
import HeaderTablet from '@/components/header-tablet';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="xl:container md:py-14 xl:grid xl:grid-cols-[255px_minmax(0,1fr)] xl:py-24">
      <Header />
      <HeaderTablet />
      {children}
    </div>
  );
}
