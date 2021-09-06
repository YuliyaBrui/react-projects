import './styles/card.css';
import { DescriptionCard } from './card-description';
import { RatingCard } from './card-rating';
import { informCards } from '../types';

interface ICardProps {
  cards: informCards[];
}

export const CardsField = ({ cards }: ICardProps) => (
  <div className="cards-field">
    {cards.map((card) => (
      <div className="card-container" key={card.id}>
        <div className="card">
          <div
            className="card__img"
            style={{ backgroundImage: `url(${card.image})` }}
          />
          <div className="card__info">
            <DescriptionCard
              title={card.title}
              date={card.date}
              author={card.author}
              body={card.body}
            />
            <RatingCard
              like={card.like}
              review={card.review}
              comments={card.comments}
            />
          </div>
        </div>
      </div>
    ))}
  </div>
);
