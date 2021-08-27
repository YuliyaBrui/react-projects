export interface Article {
  author: string
  title: string
  publishedAt: string
  description: string
  url: string
  urlToImage: string
}
export interface GET200Articles {
  articles: Article[]
  totalResults: number
}
export enum SortType {
  relevancy = 'relevancy',
  popularity = 'popularity',
  publishedAt = 'publishedAt',
}
