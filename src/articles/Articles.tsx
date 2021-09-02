import '../../assets/styles/articles.css'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Article } from '../types'

interface ArticleProps {
  page: number
  perPage: number
  totalResults: number
  articles: Article[]
  onChangePage: (pageFromInput: number) => void
  onChangePerPage: (pageFromInput: number) => void
}
/*export const Articles: React.FC<ArticleProps> = ({
  articles,
  page,
  perPage,
  totalResults,
  onChangePage,
  onChangePerPage,
}) => {
  const [articlePage, setArticlePage] = useState<number | string>(1)
  const [articlePerPage, setArticlePerPage] = useState<number>(1)

  const totalPages: number = Math.ceil(totalResults / articlePerPage)

  useEffect(() => {
    setArticlePage(page)
    setArticlePerPage(perPage)
  }, [page, perPage])

  const handleChangePage = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    const regexp = /^[0-9]+$/
    const checkValue = value.match(regexp)
    if (checkValue) {
      const newValue = +checkValue[0]
      onChangePage(newValue)
      setArticlePage(newValue)
    } else {
      setArticlePage(0)
    }
  }
  const handleChangePerPage = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    const regexp = /^[0-9]+$/
    const checkValue = value.match(regexp)
    if (checkValue) {
      const newValue = +checkValue[0]
      onChangePerPage(newValue)
      setArticlePerPage(newValue)
    } else {
      setArticlePerPage(0)
    }
  }
  return (
    <main>
      {articles.length ? (
        <div>
          <div className="container-pagination">
            <label htmlFor="input-perPage">
              <input
                id="input-perPage"
                type="number"
                value={articlePerPage}
                onChange={handleChangePerPage}
                max="100"
                min="1"
                step="1"
              />
              articles
            </label>
            <div className="wrapper_count-pages">
              <label htmlFor="input-page">
                <input
                  id="input-page"
                  type="number"
                  value={articlePage}
                  onChange={handleChangePage}
                  min="1"
                  max={totalPages}
                  step="1"
                />
                page from{' '}
              </label>
              <p className="total-pages">
                {articlePerPage > 0 ? totalPages : ' '}
              </p>
            </div>
          </div>
          <div className="articles-field">
            {articles.map((article) => (
              <div
                className="card-container"
                key={article.title + Math.random()}
              >
                <div className="card">
                  <Link to={`/details/${article.title.split(' ').join('%20')}`}>
                    <div className="image-wrapper">
                      <div
                        className="card__img"
                        style={
                          article.urlToImage
                            ? { backgroundImage: `url(${article.urlToImage})` }
                            : {
                                backgroundImage: 'url(./img/unknown_image.jpg)',
                              }
                        }
                      />
                    </div>
                    <div className="card_info">
                      <div className="card__description">
                        <h2 className="title">{article.title}</h2>
                        <p className="info">
                          <span className="date">
                            {article.publishedAt.split('T')[0]}
                          </span>
                          <span> / </span>
                          <span className="author">{article.author}</span>
                        </p>
                        <p className="summary">{article.description}</p>
                      </div>
                    </div>
                  </Link>
                  <a className="article-link" href={article.url}>
                    link to article
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <span className="no-result">
          Unfortunately no articles were found for your request
        </span>
      )}
    </main>
  )
}*/

export const Articles: React.FC<ArticleProps> = ({
  articles,
  page,
  perPage,
  totalResults,
  onChangePage,
  onChangePerPage,
}) => {
  const [articlePage, setArticlePage] = useState<number | string>(1)
  const [articlePerPage, setArticlePerPage] = useState<number>(1)

  const totalPages: number = Math.ceil(totalResults / articlePerPage)

  useEffect(() => {
    setArticlePage(page)
    setArticlePerPage(perPage)
  }, [page, perPage])

  const handleChangePage = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    const regexp = /^[0-9]+$/
    const checkValue = value.match(regexp)
    if (checkValue) {
      const newValue = +checkValue[0]
      onChangePage(newValue)
      setArticlePage(newValue)
    } else {
      setArticlePage(0)
    }
  }
  const handleChangePerPage = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    const regexp = /^[0-9]+$/
    const checkValue = value.match(regexp)
    if (checkValue) {
      const newValue = +checkValue[0]
      onChangePerPage(newValue)
      setArticlePerPage(newValue)
    } else {
      setArticlePerPage(0)
    }
  }
  return (
    <main>
      {articles.length ? (
        <div>
          <div className="container-pagination">
            <label htmlFor="input-perPage">
              <input
                id="input-perPage"
                type="number"
                value={articlePerPage}
                onChange={handleChangePerPage}
                max="100"
                min="1"
                step="1"
              />
              articles
            </label>
            <div className="wrapper_count-pages">
              <label htmlFor="input-page">
                <input
                  id="input-page"
                  type="number"
                  value={articlePage}
                  onChange={handleChangePage}
                  min="1"
                  max={totalPages}
                  step="1"
                />
                page from{' '}
              </label>
              <p className="total-pages">
                {articlePerPage > 0 ? totalPages : ' '}
              </p>
            </div>
          </div>
          <div className="articles-field">
            {articles.map((article) => (
              <div
                className="card-container"
                key={article.title + Math.random()}
              >
                <div className="card">
                  <Link to={`/details/${article.title.split(' ').join('%20')}`}>
                    <div className="image-wrapper">
                      <div
                        className="card__img"
                        style={
                          article.urlToImage
                            ? { backgroundImage: `url(${article.urlToImage})` }
                            : {
                                backgroundImage: 'url(./img/unknown_image.jpg)',
                              }
                        }
                      />
                    </div>
                    <div className="card_info">
                      <div className="card__description">
                        <h2 className="title">{article.title}</h2>
                        <p className="info">
                          <span className="date">
                            {article.publishedAt.split('T')[0]}
                          </span>
                          <span> / </span>
                          <span className="author">{article.author}</span>
                        </p>
                        <p className="summary">{article.description}</p>
                      </div>
                    </div>
                  </Link>
                  <a className="article-link" href={article.url}>
                    link to article
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <span className="no-result">
          Unfortunately no articles were found for your request
        </span>
      )}
    </main>
  )
}
