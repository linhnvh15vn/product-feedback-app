import React from 'react';

import RequestCard from '@/components/request-card';
import { type ProductRequest } from '@/types';

export default async function Page() {
  const response = await fetch('http://localhost:8000/productRequests');
  const data = (await response.json()) as ProductRequest[];

  return (
    <main className="container my-8 flex flex-col gap-4">
      {data.map((request) => (
        <RequestCard key={request.id} request={request} />
      ))}
    </main>
  );
}
