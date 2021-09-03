import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import '../../assets/styles/search-bar.css'
import { Articles } from '../articles/Articles'
import { fetchArticles } from '../redux/actions/articles'
import { useTypeSelector } from '../redux/hooks/useTypeSelector'
import { useAction } from '../redux/hooks/useAction'

import { SortType } from '../types'

export const SearchBar: React.FC = () => {
  const state = useTypeSelector((state) => state.articles)
  const { fetchArticles } = useAction()
  // const dispatch = useDispatch()
  const [isClick, setIsClick] = useState(false)
  const [searchValue, setSearchValue] = useState<string>('')
  const [fromData, setFromData] = useState('')
  const [toData, setToData] = useState('')
  const [sortBy, setSortBy] = useState<SortType>(SortType.popularity)
  const [page, setPage] = useState<number>(1)
  const [perPage, setPerPage] = useState<number>(10)
  const getData = async () => {
    console.log(searchValue, sortBy, fromData, toData, page, perPage)

    fetchArticles(searchValue, sortBy, fromData, toData, page, perPage)
  }

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    setIsClick(true)
    getData()
    console.log(state.articles)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleFromData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFromData(e.target.value)
  }
  const handleToData = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setToData(e.target.value)
  }
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsClick(false)
  }
  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <div className="search-container">
          <label htmlFor="input__text" className="wrapper_input__text">
            <img
              src="./img/icons/search.svg"
              alt="search"
              style={{ width: '20px', height: '20px' }}
            />
            <input
              id="input__text"
              placeholder="search news"
              type="text"
              required
              value={searchValue}
              onChange={handleChange}
              disabled={state.loading}
            />
          </label>
          <button
            className="button_submit"
            type="submit"
            disabled={state.loading}
            onClick={handleClick}
          >
            search
          </button>
        </div>
        <div className="search-attribute">
          <div className="container-radios">
            <label htmlFor="first_radio">
              <input
                id="first_radio"
                className="input__radio"
                type="radio"
                value={SortType.relevancy}
                checked={sortBy === SortType.relevancy}
                onChange={() => {
                  setSortBy(SortType.relevancy)
                }}
              />{' '}
              relevancy
            </label>
            <label htmlFor="second_radio">
              <input
                id="second_radio"
                className="input__radio"
                type="radio"
                value={SortType.popularity}
                checked={sortBy === SortType.popularity}
                onChange={() => {
                  setSortBy(SortType.popularity)
                }}
              />{' '}
              popularity
            </label>
            <label htmlFor="third_radio">
              <input
                id="third_radio"
                className="input__radio"
                type="radio"
                value={SortType.publishedAt}
                checked={sortBy === SortType.publishedAt}
                onChange={() => {
                  setSortBy(SortType.publishedAt)
                }}
              />{' '}
              publication date
            </label>
          </div>
          <div className="container-data">
            <label htmlFor="from-date">
              from:
              <input
                id="from-date"
                className="input__date"
                type="date"
                value={fromData}
                onChange={handleFromData}
                disabled={state.loading}
                max={toData}
              />
            </label>
            <label htmlFor="to-date">
              to:
              <input
                id="to-date"
                className="input__date"
                type="date"
                value={toData}
                onChange={handleToData}
                disabled={state.loading}
                min={fromData}
              />
            </label>
          </div>
        </div>
      </form>

      <div />
      {isClick && state.loading && (
        <div className="loader">
          <svg
            version="1.1"
            id="loader-1"
            xmlns="http://www.w3.org/2000/svg"
            width="100px"
            height="100px"
            viewBox="0 0 50 50"
          >
            <defs>
              <linearGradient
                id="linear-gradient"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#076c78" offset="0" />
                <stop stopColor="#17457c" stopOpacity="0%" offset="1" />
              </linearGradient>
            </defs>
            <path
              fill="url(#linear-gradient)"
              d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
            >
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
      )}
      {isClick && !state.loading && (
        <Articles
          articles={state.articles}
          page={page}
          perPage={perPage}
          totalResults={state?.totalResults}
          onChangePerPage={(pageFromInput: number) => setPerPage(pageFromInput)}
          onChangePage={(pageFromInput: number) => setPage(pageFromInput)}
        />
      )}
    </div>
  )
}
