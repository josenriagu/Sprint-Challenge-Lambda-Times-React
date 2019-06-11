import React from 'react';
import { TopBarDiv, ContainerDiv, ContainerLeftDiv, ContainerLeftSpan, ContainerCenterDiv, ContainerCenterSpan, ContainerRightDiv, ContainerRightSpan } from './Styles/TopBarStyles';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = ({toggleShow}) => {
  return (
    <TopBarDiv>
      <ContainerDiv>
        <ContainerLeftDiv>
          <ContainerLeftSpan>
            TOPICS
          </ContainerLeftSpan>
          <ContainerLeftSpan>
            SEARCH
          </ContainerLeftSpan>
        </ContainerLeftDiv>
        <ContainerCenterDiv>
          <ContainerCenterSpan>
            GENERAL
          </ContainerCenterSpan>
          <ContainerCenterSpan>
            BROWNBAG
          </ContainerCenterSpan>
          <ContainerCenterSpan>
            RANDOM
          </ContainerCenterSpan>
          <ContainerCenterSpan>
            MUSIC
          </ContainerCenterSpan>
          <ContainerCenterSpan>
            ANNOUNCEMENTS
          </ContainerCenterSpan>
        </ContainerCenterDiv>
        <ContainerRightDiv>
          <ContainerRightSpan onClick={toggleShow}>
            LOG IN
          </ContainerRightSpan>
        </ContainerRightDiv>
      </ContainerDiv>
    </TopBarDiv>
  )
}

export default TopBar;