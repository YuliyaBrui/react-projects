import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import instance, { API_KEY } from '../services/api';
import { Article, GET200Articles } from '../types';
import '../../assets/styles/page-details.css';

type Params = {
  qInTitle: string;
};

export const DetailsArticle: React.FC<Article> = () => {
  const { qInTitle } = useParams<Params>();
  const [isArticle, setArticle] = useState<Article>();
  async function fetchDetails() {
    try {
      const response: AxiosResponse<GET200Articles> = await instance.get(
        `v2/everything?qInTitle=${qInTitle}&apiKey=${API_KEY}`,
      );
      setArticle(response.data.articles[0]);
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <main>
      <div className="article-details">
        <h2>Article Details</h2>
        <p className="wrapper">
          <span className="key-word">Title:</span>
          <span>{isArticle?.title}</span>
        </p>
        <section className="wrapper">
          <span className="key-word">Image:</span>
          <div>
            <div className="image-wrapper">
              <div
                className="card__img"
                style={
                  isArticle?.urlToImage
                    ? { backgroundImage: `url(${isArticle?.urlToImage})` }
                    : {
                      backgroundImage: 'url(../../img/unknown_image.jpg)',
                    }
                }
              />
            </div>
            <a className="link" href={isArticle?.urlToImage}>
              {isArticle?.urlToImage}
            </a>
          </div>
        </section>
        <p className="wrapper">
          <span className="key-word">Published at:</span>
          <span>{isArticle?.publishedAt.split('T')[0]}</span>
        </p>
        <p className="wrapper">
          <span className="key-word">Author:</span>
          <span>{isArticle?.author}</span>
        </p>
        <div className="wrapper">
          <span className="key-word">Description:</span>
          <p>{isArticle?.description}</p>
        </div>
        <div className="wrapper">
          <span className="key-word">Content:</span>
          <p>{isArticle?.content}</p>
        </div>
        <p className="wrapper">
          <span className="key-word">Link to article:</span>
          <a className="link" href={isArticle?.url}>
            {isArticle?.url}
          </a>
        </p>
      </div>
    </main>
  );
};
