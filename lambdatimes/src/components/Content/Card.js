import React from 'react';
import propTypes from 'prop-types';
import { CardDiv, HeadlineDiv, AuthorDiv, ImgContainerDiv, CardImage, CardSpan } from '../Styles/CardStyles';

const Card = ({ card }) => {
  return (
    <CardDiv>
      <HeadlineDiv>{card.headline}</HeadlineDiv>
      <AuthorDiv>
        <ImgContainerDiv>
          <CardImage src={card.img} />
        </ImgContainerDiv>
        <CardSpan>By {card.author}</CardSpan>
      </AuthorDiv>
    </CardDiv>
  );
};

// Make sure to include propTypes.
Card.propTypes = {
  card: propTypes.object
}

export default Card;
