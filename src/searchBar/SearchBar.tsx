import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import '../searchBar/search-bar.css';
import { Articles } from '../articles/Articles';

import instance from '../services/api';
import { Article, GET200Articles, SortType } from '../types';

const API_KEY = 'd8c57ddb550940de83ebef3b893baa3d';
export const SearchBar: React.FC = () => {
  const [isClick, setIsClick] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [fromData, setFromData] = useState('');
  const [toData, setToData] = useState('');
  const [sortBy, setSortBy] = useState<SortType>(SortType.popularity);
  const [totalResults, setTotalResults] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(10);
  const [articles, setArticles] = useState<Article[]>([]);

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setIsClick(true);
    try {
      const response: AxiosResponse<GET200Articles> = await instance.get(
        `v2/everything?q=${searchValue}&sortBy=${sortBy}&from=${fromData}&to=${toData}&pageSize=${perPage}&page=${page}&apiKey=${API_KEY}`
      );
      setArticles(response.data.articles);
      setTotalResults(response.data.totalResults);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleFromData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFromData(e.target.value);
  };
  const handleToData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToData(e.target.value);
  };
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsClick(false);
  };
  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <div className="search-container">
          <label htmlFor="input_text" className="wrapper__input_text">
            <img src="./img/icons/search.svg" alt="search" />
            <input
              id="input_text"
              placeholder="search news"
              className="input input_text"
              type="text"
              value={searchValue}
              onChange={handleChange}
              disabled={isLoading}
            />
          </label>
          <button
            className="button button_submit"
            type="submit"
            disabled={isLoading}
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
                className="input input_radio"
                type="radio"
                value={SortType.relevancy}
                checked={sortBy === SortType.relevancy}
                onChange={() => setSortBy(SortType.relevancy)}
              />{' '}
              relevancy
            </label>
            <label htmlFor="second_radio">
              <input
                id="second_radio"
                className="input input_radio"
                type="radio"
                value={SortType.popularity}
                checked={sortBy === SortType.popularity}
                onChange={() => setSortBy(SortType.popularity)}
              />{' '}
              popularity
            </label>
            <label htmlFor="third_radio">
              <input
                id="third_radio"
                className="input input_radio"
                type="radio"
                value={SortType.publishedAt}
                checked={sortBy === SortType.publishedAt}
                onChange={() => setSortBy(SortType.publishedAt)}
              />{' '}
              publication date
            </label>
          </div>
          <div className="container-data">
            <label htmlFor="from-date">
              from:
              <input
                id="from-date"
                className="input input_date"
                type="date"
                value={fromData}
                onChange={handleFromData}
                disabled={isLoading}
              />
            </label>
            <label htmlFor="to-date">
              to:
              <input
                id="to-date"
                className="input input_date"
                type="date"
                value={toData}
                onChange={handleToData}
                disabled={isLoading}
                min={fromData}
              />
            </label>
          </div>
        </div>
      </form>

      <div />
      {isClick && isLoading && (
        <div className="loader" title="2">
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
      {isClick && !isLoading && (
        <Articles
          articles={articles}
          page={page}
          perPage={perPage}
          totalResults={totalResults}
          onChangePerPage={(pageFromInput: number) => setPerPage(pageFromInput)}
          onChangePage={(pageFromInput: number) => setPage(pageFromInput)}
        />
      )}
    </div>
  );
};
