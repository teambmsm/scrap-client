export interface postType {
  id: string;
  url: string;
  title: string;
  tags: string[];
  image: string;
  author: string;
  description: string;
  createdAt?: Date;
  view: number;
}
