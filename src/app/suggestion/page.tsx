import React from 'react';

import RequestCard from '@/components/request-card';
import data from '@/data.json';

export default function Page() {
  return (
    <main className="container flex flex-col gap-4">
      {data.productRequests.map((request) => (
        <RequestCard key={request.id} request={request} />
      ))}
    </main>
  );
}
