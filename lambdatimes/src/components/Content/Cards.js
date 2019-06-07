import React from 'react';
import uuid from 'uuid';
import propTypes from 'prop-types';
import { CardsContainerDiv } from '../Styles/CardsStyles';
import Card from './Card';

const Cards = ({ cards }) => {
  return (
    <CardsContainerDiv>
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {
        cards.map(card =>
          <Card
            key={uuid()}
            card={card}
          />
        )
      }
    </CardsContainerDiv>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: propTypes.array
}

export default Cards;