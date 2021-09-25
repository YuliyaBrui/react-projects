import { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import instance, { API_KEY } from '../../services/api';

import { GET200Articles } from '../../types';
import { DetailsAction, DetailsActionTypes } from '../types/details';

export const fetchDetails = (qInTitle: string) => async (dispatch: Dispatch<DetailsAction>) => {
  try {
    dispatch({ type: DetailsActionTypes.FETCH_DETAILS });
    const response: AxiosResponse<GET200Articles> = await instance.get(
      `v2/everything?qInTitle=${qInTitle}&apiKey=${API_KEY}`,
    );

    dispatch({
      type: DetailsActionTypes.FETCH_DETAILS_SUCCESS,
      payload: response.data.articles[0],
    });
  } catch (e) {
    dispatch({
      type: DetailsActionTypes.FETCH_DETAILS_ERROR,
      payload: 'Error',
    });
  }
};
