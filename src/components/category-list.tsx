import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import data from '@/data.json';

interface Props {
  // Add your component props here
}

export default function CategoryList(props: Props) {
  return (
    <Card>
      <CardHeader />
      <CardContent>
        {data.productRequests.map((request) => (
          <Badge key={request.category}>{request.category}</Badge>
        ))}
      </CardContent>
    </Card>
  );
}
