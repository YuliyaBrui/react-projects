import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Article } from '../types';
import './page-details.css';
import { Rootstate } from '../redux/reducers';
import { fetchDetails } from '../redux/actions/details';

type Params = {
  qInTitle: string
}
export const DetailsArticle: React.FC<Article> = () => {
  const { qInTitle } = useParams<Params>();
  const details = useSelector((state: Rootstate) => state.details);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetails(qInTitle));
  }, []);
  return (
    <main>
      <div className="article-details">
        <h2>Article Details</h2>

        <p className="wrapper">
          <span className="key-word">Title:</span>
          <span>{details.details.title}</span>
        </p>
        <section className="wrapper">
          <span className="key-word">Image:</span>
          <div>
            <div className="image-wrapper">
              <div
                className="card__img"
                style={
                  details.details.urlToImage
                    ? { backgroundImage: `url(${details.details.urlToImage})` }
                    : {
                      backgroundImage: 'url(../../img/unknown_image.jpg)',
                    }
                }
              />
            </div>
            <a className="link" href={details.details.urlToImage}>
              {details.details.urlToImage}
            </a>
          </div>
        </section>
        <p className="wrapper">
          <span className="key-word">Published at:</span>
          <span>{details.details.publishedAt.split('T')[0]}</span>
        </p>
        <p className="wrapper">
          <span className="key-word">Author:</span>
          <span>{details.details.author}</span>
        </p>
        <div className="wrapper">
          <span className="key-word">Description:</span>
          <p>{details.details.description}</p>
        </div>

        <div className="wrapper">
          <span className="key-word">Content:</span>
          <p>{details.details.content}</p>
        </div>
        <p className="wrapper">
          <span className="key-word">Link to article:</span>
          <a className="link" href={details.details.url}>
            {details.details.url}
          </a>
        </p>
      </div>
    </main>
  );
};
