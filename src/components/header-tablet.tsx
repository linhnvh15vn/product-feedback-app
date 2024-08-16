import React from 'react';

import CategoryList from '@/components/category-list';
import RoadmapList from '@/components/roadmap-list';

export default function HeaderTablet() {
  return (
    <header className="hidden md:block">
      <div className="container grid grid-cols-3 gap-x-2.5">
        <div className="inline-flex flex-col justify-end rounded-lg bg-header-tablet bg-cover bg-no-repeat p-6">
          <h2>Frontend Mentor</h2>
          <p className="sm font-medium">Feedback Board</p>
        </div>
        <CategoryList />
        <RoadmapList />
      </div>
    </header>
  );
}
