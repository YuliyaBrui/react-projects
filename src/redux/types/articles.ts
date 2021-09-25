import { Article } from '../../types';

export enum ArticlesActionTypes {
  FETCH_ARTICLES = 'FETCH_ARTICLES',
  FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS',
  FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR',
}
interface FetchArticlesAction {
  type: ArticlesActionTypes.FETCH_ARTICLES
}
interface FetchArticlesSuccessAction {
  type: ArticlesActionTypes.FETCH_ARTICLES_SUCCESS
  payload: { articles: Article[]; totalResults: number }
}
interface FetchArticlesErrorAction {
  type: ArticlesActionTypes.FETCH_ARTICLES_ERROR
  payload: { error: string }
}
export interface ArticleState {
  articles: Article[]
  totalResults: number | undefined
  loading: boolean
  error: null | string | undefined
}
export type ArticlesAction =
  | FetchArticlesAction
  | FetchArticlesErrorAction
  | FetchArticlesSuccessAction
