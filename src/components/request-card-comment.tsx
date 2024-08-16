import React from 'react';

import RequestCardReply from '@/components/request-card-reply';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { type Comment } from '@/types';

interface Props {
  comment: Comment;
  isLast: boolean;
}

export default function RequestCardComment({ comment, isLast }: Props) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={comment.user.image} alt={comment.user.username} />
        </Avatar>
        <div className="flex-1">
          <h4>{comment.user.name}</h4>
          <span>@{comment.user.username}</span>
        </div>
        <Button type="button" variant="ghost">
          Reply
        </Button>
      </div>
      <p>{comment.content}</p>

      {!!comment.replies && (
        <div className="relative">
          <div className="absolute h-3/5 w-px bg-border" />
          <div className="space-y-6 pl-6">
            {comment.replies.map((reply) => (
              <RequestCardReply key={reply.replyingTo} reply={reply} />
            ))}
          </div>
        </div>
      )}

      {!isLast && <Separator className="!my-6" />}
    </section>
  );
}
