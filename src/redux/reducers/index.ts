import { combineReducers } from 'redux';
import { articlesReducer } from './articlesReducer';
import { detailsReducer } from './detailsReducer';
import { addSearchValueReducer } from './searchValueReducer';

export const rootReducer = combineReducers({
  articles: articlesReducer,
  details: detailsReducer,
  value: addSearchValueReducer,
});
export type Rootstate = ReturnType<typeof rootReducer>
