export interface Article {
  title: string;
  author: string;
  description: string;
  date: string;
  category: string;
  link: string;
  type: 'video' | 'article'
}
