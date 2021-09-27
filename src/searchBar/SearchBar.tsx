import React, { useEffect, useState } from 'react';
import './search-bar.css';
import { useDispatch, useSelector } from 'react-redux';
import { Articles } from '../articles/Articles';
import { SortType } from '../types';
import { Rootstate } from '../redux/reducers';
import { fetchArticles } from '../redux/actions/articles';
import { addSearchValue } from '../redux/actions/searchValue';

export const SearchBar: React.FC = () => {
  const stateTooling = useSelector(
    (state: Rootstate) => state.value.stateTooling,
  );
  const articles = useSelector((state: Rootstate) => state.articles);
  const dispatch = useDispatch();
  const [isClick, setIsClick] = useState(false);
  const [searchValue, setSearchValue] = useState<string>(
    stateTooling.searchValue,
  );
  const [fromData, setFromData] = useState(stateTooling.fromData);
  const [toData, setToData] = useState(stateTooling.toData);
  const [sortBy, setSortBy] = useState<SortType>(stateTooling.sortBy);
  const [page, setPage] = useState<number>(stateTooling.page);
  const [perPage, setPerPage] = useState<number>(stateTooling.perPage);
  const getData = async () => {
    if (searchValue.length) {
      setIsClick(true);
      dispatch(
        addSearchValue({
          searchValue,
          sortBy,
          fromData,
          toData,
          page,
          perPage,
        }),
      );
      dispatch(
        fetchArticles(searchValue, sortBy, fromData, toData, page, perPage),
      );
    }
  };
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    getData();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleFromData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFromData(e.target.value);
  };
  const handleToData = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setToData(e.target.value);
  };
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsClick(false);
  };
  useEffect(() => {
    getData();
  }, [sortBy, fromData, toData, page, perPage]);
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
              disabled={articles.loading}
            />
          </label>
          <button
            className="button_submit"
            type="submit"
            disabled={articles.loading}
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
                onChange={() => setSortBy(SortType.relevancy)}
              />
              relevancy
            </label>
            <label htmlFor="second_radio">
              <input
                id="second_radio"
                className="input__radio"
                type="radio"
                value={SortType.popularity}
                checked={sortBy === SortType.popularity}
                onChange={() => setSortBy(SortType.popularity)}
              />
              popularity
            </label>
            <label htmlFor="third_radio">
              <input
                id="third_radio"
                className="input__radio"
                type="radio"
                value={SortType.publishedAt}
                checked={sortBy === SortType.publishedAt}
                onChange={() => setSortBy(SortType.publishedAt)}
              />
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
                disabled={articles.loading}
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
                disabled={articles.loading}
                min={fromData}
              />
            </label>
          </div>
        </div>
      </form>

      <div />
      {isClick && articles.loading && (
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
      {isClick || articles.articles.length ? (
        <Articles
          articles={articles.articles}
          page={page}
          perPage={perPage}
          totalResults={articles.totalResults}
          onChangePerPage={(pageFromInput: number) => setPerPage(pageFromInput)}
          onChangePage={(pageFromInput: number) => setPage(pageFromInput)}
        />
      ) : (
        ''
      )}
    </div>
  );
};
