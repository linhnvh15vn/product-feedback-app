'use client';

import React from 'react';

import FeedbackForm from '@/components/feedback-form';

interface Props {
  // Add your component props here
}

export default function Page(props: Props) {
  return (
    <main className="container mt-10">
      <FeedbackForm />
    </main>
  );
}
