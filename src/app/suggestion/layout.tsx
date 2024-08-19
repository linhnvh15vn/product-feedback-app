import React from 'react';

import CallToAction from '@/components/call-to-action';
import Header from '@/components/header';
import HeaderTablet from '@/components/header-tablet';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="md:py-14">
      <Header />
      <HeaderTablet />
      <CallToAction />
      {children}
    </div>
  );
}
