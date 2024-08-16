import React from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { STATUSES } from '@/constants';
import { toCapitalize } from '@/lib/utils';
import { type ProductRequest } from '@/types';

export default async function Page() {
  const response = await fetch('http://localhost:8000/productRequests');
  const data = (await response.json()) as ProductRequest[];

  return (
    <main>
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="w-full">
          {STATUSES.map((status) => (
            <TabsTrigger key={status} value={status}>
              {toCapitalize(status)}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </main>
  );
}
