import './card.css';
import React from 'react';
import { State } from '../form/Form';

interface CardProps {
  Item: State;
}

export const Card: React.FC<CardProps> = ({ Item }) => (
  <div className="card-container">
    <div className="card">
      <div className="card__content">
        <span className="card__content__point point">
          Name:
          <span className="point__value">{Item.firstName}</span>
        </span>
        <br />
        <span className="card__content__point point">
          Surname:
          <span className="point__value">{Item.surName}</span>
        </span>
        <br />
        <span className="card__content__point point">
          Birh date:
          <span className="point__value">{Item.birthDate}</span>
        </span>
        <br />
        <span className="card__content__point point">
          Country:
          <span className="point__value">{Item.country}</span>
        </span>
        <br />
        <span className="card__content__point point">
          Email:
          <span className="point__value">{Item.email}</span>
        </span>
        <br />
        <span className="card__content__point point">
          To send newsletter:
          <span className="point__value">{Item.sendNews ? 'Yes' : 'No'}</span>
        </span>
      </div>
    </div>
  </div>
);
