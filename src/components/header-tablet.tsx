import React from 'react';

import CategoryList from '@/components/category-list';
import RoadmapList from '@/components/roadmap-list';

export default function HeaderTablet() {
  return (
    <header className="hidden md:block">
      <div className="container mb-10 grid grid-cols-3 gap-2.5 xl:auto-rows-auto xl:grid-cols-1 xl:gap-6">
        <div className="inline-flex flex-col justify-end rounded-lg bg-header-tablet bg-cover bg-no-repeat p-6 xl:bg-header-desktop">
          <h2>Frontend Mentor</h2>
          <p className="sm font-medium">Feedback Board</p>
        </div>
        <CategoryList />
        <RoadmapList />
      </div>
    </header>
  );
}
