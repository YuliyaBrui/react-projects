import '../../assets/styles/card.css';
import React from 'react';
import { State } from '../form/Form';

interface CardProps {
  Item: State;
}

export const Card: React.FC<CardProps> = ({ Item }) => (
  <div className="card-container">
    <div className="card">
      <div className="inform">
        <span className="point">
          {' '}
          Name: <span className="value">{Item.firstName}</span>
        </span>
        <br />
        <span className="point">
          Surname:
          <span className="value">{Item.surName}</span>
        </span>
        <br />
        <span className="point">
          Birh date: <span className="value">{Item.birthDate}</span>
        </span>
        <br />
        <span className="point">
          Country: <span className="value">{Item.country}</span>
        </span>
        <br />
        <span className="point">
          Email: <span className="value">{Item.email}</span>
        </span>
        <br />
        <span className="point">
          To send newsletter:{' '}
          <span className="value">{Item.toggle ? 'Yes' : 'No'}</span>
        </span>
      </div>
    </div>
  </div>
);
