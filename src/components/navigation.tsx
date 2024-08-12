import React from 'react';

import { Menu } from 'lucide-react';

import CategoryList from '@/components/category-list';
import RoadmapList from '@/components/roadmap-list';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface Props {}

export default function Navigation(props: Props) {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <CategoryList />
        <RoadmapList />
      </SheetContent>
    </Sheet>
  );
}
