import React from 'react';

import Link from 'next/link';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import data from '@/data.json';
import { toCapitalize } from '@/lib/utils';

export default function RoadmapList() {
  const dataGroupByStatus = data.productRequests.reduce(
    (acc: Record<string, number>, cur) => {
      acc[cur.status] = (acc[cur.status] || 0) + 1;
      return acc;
    },
    {},
  );

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Roadmap</CardTitle>
        <Link href="/roadmap">View</Link>
      </CardHeader>
      <CardContent>
        {Object.entries(dataGroupByStatus).map(([key, value]) => (
          <div key={key} className="flex items-center gap-4">
            <div className="size-2 rounded-full bg-orange-400" />
            <span className="flex-1">{toCapitalize(key)}</span>
            <span>{value}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
