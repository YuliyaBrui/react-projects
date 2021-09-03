import { combineReducers } from 'redux'
import { articlesReducer } from './articlesReducer'
import { detailsReducer } from './detailsReducer'

export const rootReducer = combineReducers({
  articles: articlesReducer,
  details: detailsReducer,
})
export type Rootstate = ReturnType<typeof rootReducer>
