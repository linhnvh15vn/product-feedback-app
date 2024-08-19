'use client';

import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { CATEGORIES, STATUSES } from '@/constants';
import { toCapitalize } from '@/lib/utils';

interface Props {
  formValues?: InferFeedbackFormSchema;
}

const schema = z.object({
  title: z.string().min(1),
  category: z.string(),
  status: z.string(),
  description: z.string(),
});

type InferFeedbackFormSchema = z.infer<typeof schema>;

const defaultValues: InferFeedbackFormSchema = {
  title: '',
  category: '',
  status: '',
  description: '',
};

export default function FeedbackForm({ formValues }: Props) {
  const router = useRouter();

  const isEdit = !!formValues;

  const form = useForm<InferFeedbackFormSchema>({
    resolver: zodResolver(schema),
    defaultValues: formValues ?? defaultValues,
  });

  function onSubmit(values: InferFeedbackFormSchema) {
    console.log(values);
  }

  return (
    <Card>
      <CardHeader className="relative">
        <Image
          src={
            isEdit
              ? '/assets/shared/icon-edit-feedback.svg'
              : '/assets/shared/icon-new-feedback.svg'
          }
          alt="icon"
          width={40}
          height={40}
          className="absolute -top-1/2 translate-y-1/2"
        />
        <CardTitle className="text-lg">
          {isEdit ? `Editing '${formValues.title}'` : 'Create New Feedback'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Feedback title</FormLabel>
                  <FormDescription>
                    Add a short, descriptive headline
                  </FormDescription>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormDescription>
                    Choose a category for your feedback
                  </FormDescription>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {CATEGORIES.map((category) => (
                        <SelectItem key={category} value={category}>
                          {toCapitalize(category)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {isEdit && (
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Update Status</FormLabel>
                    <FormDescription>Change feature state</FormDescription>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {STATUSES.map((status) => (
                          <SelectItem key={status} value={status}>
                            {toCapitalize(status)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Feedback Detail</FormLabel>
                  <FormDescription>
                    Include any specific comments on what should be improved,
                    added, etc.
                  </FormDescription>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button type="submit" className="w-full">
          Add Feedback
        </Button>
        <Button
          type="button"
          variant="tertiary"
          className="w-full"
          onClick={() => router.back()}
        >
          Cancel
        </Button>
        {isEdit && (
          <Button type="button" variant="destructive" className="w-full">
            Delete
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
