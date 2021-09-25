import { SortType } from '../../types';

export interface IValueState {
  searchValue: string
  sortBy: SortType
  fromData: string
  toData: string
  page: number
  perPage: number
}
interface FetchAddValueAction {
  type: valueTypes.ADD_SEARCH_VALUE
  payload: { stateTooling: IValueState }
}
export type SearchValueAction = FetchAddValueAction
export enum valueTypes {
  ADD_SEARCH_VALUE = 'ADD_SEARCH_VALUE',
}
export const addSearchValue = ({
  searchValue,
  sortBy,
  fromData,
  toData,
  page,
  perPage,
}: IValueState): SearchValueAction => ({
  type: valueTypes.ADD_SEARCH_VALUE,
  payload: {
    stateTooling: {
      searchValue,
      sortBy,
      fromData,
      toData,
      page,
      perPage,
    },
  },
});
