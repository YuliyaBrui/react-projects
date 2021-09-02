import {
  ArticlesAction,
  ArticlesActionTypes,
  ArticleState,
} from '../types/articles'

const initialState: ArticleState = {
  articles: [],
  totalResults: 0,
  loading: false,
  error: null,
}
export const articlesReducer = (
  state: ArticleState = initialState,
  action: ArticlesAction
): ArticleState => {
  switch (action.type) {
    case ArticlesActionTypes.FETCH_ARTICLES:
      return { loading: true, error: null, articles: [] }
    case ArticlesActionTypes.FETCH_ARTICLES_SUCCESS:
      return {
        loading: false,
        error: null,
        articles: action.payload?.articles,
        totalResults: action.payload?.totalResults,
      }
    case ArticlesActionTypes.FETCH_ARTICLES_ERROR:
      return { loading: false, error: action.payload?.error, articles: [] }
    default:
      return state
  }
}
