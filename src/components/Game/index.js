import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './style'

import NextContext from '../../context/NextContext'

const apiStatusConstants = {
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
  initial: 'INITIAL',
}

class Game extends Component {
  state = {gamingVideos: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.fetchGameVideos()
  }

  fetchGameVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const result = await response.json()
      console.log(result)
      const updatedData = result.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewsCount: each.view_count,
      }))
      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <NextContext.Consumer>
      {value => {
        const {isLightTheme} = value
        const Color = isLightTheme ? '#000000' : '#ffffff'
        return (
          <div className="loader-container" data-testid="loader">
            <Loader type="ThreeDots" color={Color} height="50" width="50" />
          </div>
        )
      }}
    </NextContext.Consumer>
  )

  onRetry = () => {
    this.fetchGameVideos()
  }

  renderFailureView = () => (
    <NextContext.Consumer>
      {value => {
        const {isLightTheme} = value
        const bgColor = isLightTheme ? '#f9f9f9' : '#181818'
        const color = isLightTheme ? '#000000' : '#ffffff'
        return (
          <FailureContainer bgColor={bgColor}>
            <FailureImage
              src={
                isLightTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
              }
              alt="failure view"
            />
            <FailureHeading color={color}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription color={color}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureDescription>
            <RetryButton type="button" onClick={this.onRetry}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </NextContext.Consumer>
  )

  render() {
    const {apiStatus} = this.state
    return (
      <div>
        <h1>Heading</h1>
      </div>
    )
  }
}

export default Game
