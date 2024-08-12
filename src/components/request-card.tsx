import React from 'react';

import { MessageCircle } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { toCapitalize } from '@/lib/utils';

interface Props {
  request: any;
}

export default function RequestCard({ request }: Props) {
  return (
    <Card key={request.id}>
      <CardHeader>
        <CardTitle>{request.title}</CardTitle>
        <CardDescription>{request.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Badge>{toCapitalize(request.category)}</Badge>
      </CardContent>
      <CardFooter className="flex justify-between gap-1">
        <Badge>{request.upvotes}</Badge>
        <div className="flex items-center">
          <MessageCircle />
          <span>{request.comments?.length}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
