import { SortType } from '../../types';
import {
  IValueState,
  SearchValueAction,
  valueTypes,
} from '../actions/searchValue';

export interface IstateTooling {
  stateTooling: IValueState
}
const initialState: IstateTooling = {
  stateTooling: {
    searchValue: '',
    sortBy: SortType.popularity,
    fromData: '',
    toData: '',
    page: 1,
    perPage: 10,
  },
};
export const addSearchValueReducer = (
  state: IstateTooling = initialState,
  action: SearchValueAction,
): IstateTooling => {
  switch (action.type) {
    case valueTypes.ADD_SEARCH_VALUE:
      return { ...state, stateTooling: action.payload.stateTooling };
    default:
      return state;
  }
};
