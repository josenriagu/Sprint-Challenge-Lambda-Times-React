import styled from 'styled-components';

export const TopBarDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`
export const ContainerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`
export const ContainerLeftDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`
export const ContainerLeftSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`
export const ContainerCenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`
export const ContainerCenterSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
  text-decoration: underline;
  }
`
export const ContainerRightDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`
export const ContainerRightSpan = styled.span`
  cursor: pointer;
`