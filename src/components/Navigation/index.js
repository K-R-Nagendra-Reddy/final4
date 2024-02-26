import {Link} from 'react-router-dom'

import {FaHome, FaFireAlt} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {GiSave} from 'react-icons/gi'

import {
  NavigationContainer,
  TopContainer,
  NavigationItem,
  NavigationLink,
  BottomContainer,
  ContactUsContainer,
  ContactText,
  BottomDescription,
  ContactImage,
  NavigationBox,
} from './style'

import NextContext from '../../context/NextContext'

const Navigation = props => (
  <NextContext.Consumer>
    {value => {
      const {isLightTheme} = value
      const bgColor = isLightTheme ? '#f1f5f9' : '#231f20'
      const color = isLightTheme ? '#231f20' : '#f1f5f9'
      return (
        <NavigationContainer color={color} bgColor={bgColor}>
          <TopContainer>
            <Link to="/">
              <NavigationItem>
                <NavigationBox color={color}>
                  <FaHome size={25} />
                </NavigationBox>
                <NavigationLink color={color}>Home</NavigationLink>
              </NavigationItem>
            </Link>
            <Link to="/trending">
              <NavigationItem>
                <NavigationBox>
                  <FaFireAlt size={25} color={color} />
                </NavigationBox>
                <NavigationLink color={color}>Trending</NavigationLink>
              </NavigationItem>
            </Link>
            <Link to="/gaming">
              <NavigationItem>
                <NavigationBox color={color}>
                  <SiYoutubegaming size={25} />
                </NavigationBox>

                <NavigationLink color={color}>Gaming</NavigationLink>
              </NavigationItem>
            </Link>
            <Link to="/saved-videos">
              <NavigationItem>
                <NavigationBox color={color}>
                  <GiSave size={25} />
                </NavigationBox>

                <NavigationLink color={color}>Saved videos</NavigationLink>
              </NavigationItem>
            </Link>
          </TopContainer>
          <BottomContainer>
            <ContactText color={color}>CONTACT US</ContactText>
            <ContactUsContainer>
              <ContactImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <ContactImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <ContactImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </ContactUsContainer>
            <BottomDescription color={color}>
              Enjoy Now to see your channels and recommendations!
            </BottomDescription>
          </BottomContainer>
        </NavigationContainer>
      )
    }}
  </NextContext.Consumer>
)

export default Navigation
