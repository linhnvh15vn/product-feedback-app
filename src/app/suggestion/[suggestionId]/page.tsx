import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import RequestCard from '@/components/request-card';
import RequestCardComment from '@/components/request-card-comment';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { type ProductRequest } from '@/types';

interface Props {
  params: {
    suggestionId: string;
  };
}

export default async function Page({ params }: Props) {
  const response = await fetch(
    `http://localhost:8000/productRequests/${params.suggestionId}`,
  );
  const request = (await response.json()) as ProductRequest;

  return (
    <main className="container space-y-6">
      <div className="flex items-center justify-between">
        <Link href="/suggestion" className="flex items-center gap-4">
          <Image
            src="/assets/shared/icon-arrow-left.svg"
            alt="Go back"
            width={7}
            height={10}
          />
          Go Back
        </Link>
        <Link
          href={`/suggestion/edit/${params.suggestionId}`}
          className={buttonVariants({ variant: 'secondary' })}
        >
          Edit Feedback
        </Link>
      </div>

      <RequestCard request={request} />

      <Card>
        <CardHeader>
          <CardTitle>4 Comments</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {request.comments?.map((comment, index) => (
            <RequestCardComment
              key={comment.id}
              comment={comment}
              isLast={
                (request.comments && request.comments.length - 1) === index
              }
            />
          ))}
        </CardContent>
      </Card>
    </main>
  );
}
