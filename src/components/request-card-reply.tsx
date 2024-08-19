import React from 'react';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { type Reply } from '@/types';

interface Props {
  reply: Reply;
}

export default function RequestCardReply({ reply }: Props) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={reply.user.image} alt={reply.user.username} />
        </Avatar>
        <div className="flex-1">
          <h4>{reply.user.name}</h4>
          <span>@{reply.user.username}</span>
        </div>
        <Button type="button" variant="ghost">
          Reply
        </Button>
      </div>
      <p className="text-xs text-muted-foreground md:pl-[72px]">
        <span className="font-bold text-primary">@{reply.replyingTo}</span>
        &nbsp;
        {reply.content}
      </p>
    </div>
  );
}
