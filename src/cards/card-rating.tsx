import { Rating } from '../types';

export function RatingCard({ like, review, comments }: Rating) {
  return (
    <div className="card__info__rating rating-item">
      <img
        className="rating-item__icon"
        src="./img/icons/like.png"
        alt="like"
      />
      <span className="rating-item__data">{like}</span>
      <img
        className="rating-item__icon"
        src="./img/icons/review.png"
        alt="review"
      />
      <span className="rating-item__data">{review}</span>
      <img
        className="rating-item__icon"
        src="./img/icons/chat.png"
        alt="comments"
      />
      <span className="rating-item__data">{comments}</span>
    </div>
  );
}
