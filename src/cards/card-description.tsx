import { Description } from '../types';

export function DescriptionCard({ title, date, author, body }: Description) {
  return (
    <div className="card__info__item item">
      <h2 className="item__title">{title}</h2>
      <p className="item__public-info">
        <span className="item__date">{date}</span>
        <span> / </span>
        <a href="http://localhost:8080" className="item__author">
          {author}
        </a>
      </p>
      <p className="item__summary">{body}</p>
      <a className="item__link" href="http://localhost:8080">
        continue reading...
      </a>
    </div>
  );
}
