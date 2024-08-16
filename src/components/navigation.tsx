import React from 'react';

import Image from 'next/image';

import CategoryList from '@/components/category-list';
import RoadmapList from '@/components/roadmap-list';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Navigation() {
  return (
    <Sheet>
      <SheetTrigger>
        <Image
          src="/assets/shared/mobile/icon-hamburger.svg"
          alt="menu"
          width={20}
          height={17}
        />
      </SheetTrigger>
      <SheetContent>
        <CategoryList />
        <RoadmapList />
      </SheetContent>
    </Sheet>
  );
}
