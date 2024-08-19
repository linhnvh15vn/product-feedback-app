'use client';

import React, { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

const schema = z.object({
  content: z.string().min(1).max(250),
});

export default function AddComment() {
  const [remainingCharacters, setRemainingCharacters] = useState(250);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      content: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    console.log(values);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Add Comment</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Type your comment here"
                      onChange={(e) => {
                        setRemainingCharacters(250 - e.target.value.length);
                        field.onChange(e);
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {remainingCharacters} Characters left
        </span>
        <Button type="submit">Post Comment</Button>
      </CardFooter>
    </Card>
  );
}
