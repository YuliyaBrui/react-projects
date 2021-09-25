import { Article } from '../../types';

export interface DetailsState {
  details: Article
  loading: boolean
  error: null | string
}
export enum DetailsActionTypes {
  FETCH_DETAILS = 'FETCH_DETAILS',
  FETCH_DETAILS_SUCCESS = 'FETCH_DETAILS_SUCCESS',
  FETCH_DETAILS_ERROR = 'FETCH_DETAILS_ERROR',
}
interface FetchDetailsAction {
  type: DetailsActionTypes.FETCH_DETAILS
}
interface FetchDetailsSuccessAction {
  type: DetailsActionTypes.FETCH_DETAILS_SUCCESS
  payload: Article
}
interface FetchDetailsErrorAction {
  type: DetailsActionTypes.FETCH_DETAILS_ERROR
  payload: string
}
export type DetailsAction =
  | FetchDetailsAction
  | FetchDetailsSuccessAction
  | FetchDetailsErrorAction
