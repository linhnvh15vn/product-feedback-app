import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CATEGORIES } from '@/constants';
import { toCapitalize } from '@/lib/utils';

export default function CategoryList() {
  return (
    <Card>
      <CardHeader />
      <CardContent className="flex flex-wrap gap-2">
        <Badge>All</Badge>
        {CATEGORIES.map((category) => (
          <Badge key={category}>{toCapitalize(category)}</Badge>
        ))}
      </CardContent>
    </Card>
  );
}
