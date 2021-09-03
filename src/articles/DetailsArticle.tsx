import React, { useEffect } from 'react'

import { Article } from '../types'
import '../../assets/styles/page-details.css'
import { useTypeSelector } from '../redux/hooks/useTypeSelector'
import { useAction } from '../redux/hooks/useAction'
import { useParams } from 'react-router-dom'
type Params = {
  qInTitle: string
}
export const DetailsArticle: React.FC<Article> = () => {
  const { qInTitle } = useParams<Params>()
  const state = useTypeSelector((state) => state.details)
  console.log(state.details)
  const { fetchDetails } = useAction()
  useEffect(() => {
    fetchDetails(qInTitle)
  }, [])
  return (
    <main>
      <div className="article-details">
        <h2>Article Details</h2>

        <p className="wrapper">
          <span className="key-word">Title:</span>
          <span>{state.details.title}</span>
        </p>
        <section className="wrapper">
          <span className="key-word">Image:</span>
          <div>
            <div className="image-wrapper">
              <div
                className="card__img"
                style={
                  state.details.urlToImage
                    ? { backgroundImage: `url(${state.details.urlToImage})` }
                    : {
                        backgroundImage: 'url(../../img/unknown_image.jpg)',
                      }
                }
              />
            </div>
            <a className="link" href={state.details.urlToImage}>
              {state.details.urlToImage}
            </a>
          </div>
        </section>
        <p className="wrapper">
          <span className="key-word">Published at:</span>
          <span>{state.details.publishedAt.split('T')[0]}</span>
        </p>
        <p className="wrapper">
          <span className="key-word">Author:</span>
          <span>{state.details.author}</span>
        </p>
        <div className="wrapper">
          <span className="key-word">Description:</span>
          <p>{state.details.description}</p>
        </div>

        <div className="wrapper">
          <span className="key-word">Content:</span>
          <p>{state.details.content}</p>
        </div>
        <p className="wrapper">
          <span className="key-word">Link to article:</span>
          <a className="link" href={state.details.url}>
            {state.details.url}
          </a>
        </p>
      </div>
    </main>
  )
}
