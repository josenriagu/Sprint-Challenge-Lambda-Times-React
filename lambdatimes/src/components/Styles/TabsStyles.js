import styled from 'styled-components';

export const TabsDiv = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`
export const TopicsDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`
export const TitleSpan = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`