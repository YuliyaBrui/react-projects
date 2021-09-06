export interface informCards {
  id: number;
  title: string;
  author: string;
  date: string;
  body: string;
  image: string;
  like: number;
  review: number;
  comments: number;
}
export interface Rating {
  like: number;
  review: number;
  comments: number;
}
export interface Description {
  title: string;
  date: string;
  author: string;
  body: string;
}
