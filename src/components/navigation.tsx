import React from 'react';

import Image from 'next/image';

import CategoryList from '@/components/category-list';
import RoadmapList from '@/components/roadmap-list';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function Navigation() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/shared/mobile/icon-hamburger.svg"
          alt="menu"
          width={20}
          height={17}
        />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>&nbsp;</SheetTitle>
          <SheetDescription>&nbsp;</SheetDescription>
        </SheetHeader>
        <div className="space-y-6">
          <CategoryList />
          <RoadmapList />
        </div>
      </SheetContent>
    </Sheet>
  );
}
