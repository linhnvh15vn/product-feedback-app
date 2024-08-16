export type ProductRequest = {
  id: string;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments?: Comment[];
};

export type Comment = {
  id: string;
  content: string;
  user: User;
  replies?: Reply[];
};

export type User = {
  image: string;
  name: string;
  username: string;
};

export type Reply = {
  content: string;
  replyingTo: string;
  user: User;
};
