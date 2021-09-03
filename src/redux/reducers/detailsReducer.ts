import {
  DetailsAction,
  DetailsActionTypes,
  DetailsState,
} from '../types/details'
const initialState: DetailsState = {
  details: {
    author: '',
    title: '',
    publishedAt: '',
    description: '',
    url: '',
    urlToImage: '',
    content: '',
  },
  error: null,
  loading: false,
}
export const detailsReducer = (
  state: DetailsState = initialState,
  action: DetailsAction
): DetailsState => {
  switch (action.type) {
    case DetailsActionTypes.FETCH_DETAILS:
      return { ...state, loading: true }
    case DetailsActionTypes.FETCH_DETAILS_SUCCESS:
      return { ...state, loading: false, details: action.payload }
    case DetailsActionTypes.FETCH_DETAILS_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
