import React from 'react'
import { AxiosResponse } from 'axios'
import { Dispatch } from 'react'
import instance, { API_KEY } from '../../services/api'
import { ArticlesAction, ArticlesActionTypes } from '../types/articles'
import { GET200Articles } from '../../types'

export const fetchArticles = (
  searchValue: string,
  sortBy: string,
  fromData: string,
  toData: string,
  page: number,
  perPage: number
) => {
  return async (dispatch: Dispatch<ArticlesAction>) => {
    try {
      dispatch({ type: ArticlesActionTypes.FETCH_ARTICLES })
      console.log(searchValue, sortBy, fromData, toData, page, perPage)
      const response: AxiosResponse<GET200Articles> = await instance.get(
        `v2/everything?q=${searchValue}&sortBy=${sortBy}&from=${fromData}&to=${toData}&pageSize=${perPage}&page=${page}&apiKey=${API_KEY}`
      )

      dispatch({
        type: ArticlesActionTypes.FETCH_ARTICLES_SUCCESS,
        payload: response.data,
      })
    } catch (e) {
      dispatch({
        type: ArticlesActionTypes.FETCH_ARTICLES_ERROR,
        payload: { error: 'Error' },
      })
    }
  }
}
