import React from 'react';
import { HeaderDiv, DateSpan, HeaderH1, TimeSpan } from './Styles/HeaderStyles';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderDiv>
      <DateSpan>MARCH 32, 2018</DateSpan>
      <HeaderH1>Lambda Times</HeaderH1>
      <TimeSpan className="temp">98°</TimeSpan>
    </HeaderDiv>
  )
}

export default Header