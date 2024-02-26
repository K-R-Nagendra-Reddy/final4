import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`
export const FailureImage = styled.img`
  height: 30vh;
  width: 45vw;
`
export const FailureHeading = styled.h1`
  color: ${props => props.color};
  font-size: 26px;
  font-family: 'Roboto';
`
export const FailureDescription = styled.p`
  color: ${props => props.color};
  font-size: 16px;
  font-family: 'Roboto';
  margin-bottom: 10px;
`
export const RetryButton = styled.button`
  background-color: #00306e;
  height: 20px;
  width: 40px;
  border-radius: 6px;
  color: #ffffff;
`
