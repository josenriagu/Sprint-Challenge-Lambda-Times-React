import React from 'react';
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

// Make sure to include PropTypes.

export default Card;
