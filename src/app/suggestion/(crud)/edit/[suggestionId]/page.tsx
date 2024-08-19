import React from 'react';

import FeedbackForm from '@/components/feedback-form';
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
    <main>
      <FeedbackForm formValues={request} />
    </main>
  );
}
