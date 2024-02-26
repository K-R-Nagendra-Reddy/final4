import styled from 'styled-components'

export const NavigationContainer = styled.nav`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 13vw;
  height: 90vh;
  margin-top: 60px;
  top: 0;
  position: fixed;
  margin-bottom: 0px;
`

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

export const NavigationItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  color: ${props => props.color};
`
export const NavigationLink = styled.p`
  color: ${props => props.color};
  font-size: 14px;
  margin-left: 15px;
  font-family: 'Roboto';
`

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.color};
  align-self: flex-end;
`

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 8px;
`
export const ContactText = styled.p`
  color: ${props => props.color};
  font-size: 16px;
  font-family: 'Roboto';
`

export const BottomDescription = styled.p`
  color: ${props => props.color};
  font-size: 12px;
  font-family: 'Roboto';
`
export const ContactImage = styled.img`
  height: 20px;
  width: 20px;
  margin: 6px;
`
export const NavigationBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${props => props.color};
`
