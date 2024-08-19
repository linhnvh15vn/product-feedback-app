import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="container mt-10 space-y-14">
      <Link href="/suggestion" className="flex items-center gap-4">
        <Image
          src="/assets/shared/icon-arrow-left.svg"
          alt="go back"
          width={7}
          height={10}
        />
        Go Back
      </Link>
      {children}
    </div>
  );
}
