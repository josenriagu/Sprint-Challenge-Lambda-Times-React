import styled from 'styled-components';

export const CardDiv = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`
export const HeadlineDiv = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`
export const AuthorDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
`
export const ImgContainerDiv = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
`
export const CardImage = styled.img`
  width: 40px;
`
export const CardSpan = styled.span`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`