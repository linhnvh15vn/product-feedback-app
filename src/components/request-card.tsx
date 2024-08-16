import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

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
import { type ProductRequest } from '@/types';

interface Props {
  request: ProductRequest;
}

export default function RequestCard({ request }: Props) {
  return (
    <Card key={request.id}>
      <CardHeader>
        <CardTitle>
          <Link href={`/suggestion/${request.id}`}>{request.title}</Link>
        </CardTitle>
        <CardDescription>{request.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Badge>{toCapitalize(request.category)}</Badge>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Badge>{request.upvotes}</Badge>
        <div className="flex items-center gap-2">
          <Image
            src="/assets/shared/icon-comments.svg"
            width={18}
            height={16}
            alt="comment"
          />
          <h4>{request.comments?.length}</h4>
        </div>
      </CardFooter>
    </Card>
  );
}
