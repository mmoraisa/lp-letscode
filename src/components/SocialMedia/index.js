import PropTypes from 'prop-types'
import { StyledImg } from './styles'

const SocialMedia = ({ link, imgSrc }) => (
  <a href={link} target="_blank">
    <StyledImg src={imgSrc} />
  </a>
)

SocialMedia.propTypes = {
  link: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired
}

export default SocialMedia
