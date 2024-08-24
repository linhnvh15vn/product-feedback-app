'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { buttonVariants } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function CallToAction() {
  const pathname = usePathname();

  return (
    pathname === '/suggestion' && (
      <div className="container flex h-14 items-center gap-10 rounded-xl bg-tertiary">
        <div className="hidden items-center gap-4 text-white md:flex">
          <Image
            src="/assets/shared/icon-suggestions.svg"
            alt="suggestion"
            width={23}
            height={24}
          />
          0 Suggestions
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex-1 text-left text-white">
            Sort by: Most Upvotes
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link href="/suggestion/create" className={buttonVariants()}>
          + Add Feedback
        </Link>
      </div>
    )
  );
}
