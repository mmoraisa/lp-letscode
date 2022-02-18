import { Body, StyledSection } from './styles'
import { PRIMARY_COLOR, WHITE } from '../../defaults/Colors'
import PropTypes from 'prop-types'

const Section = ({ children, title, bodyStyles, styles }) => (
  <StyledSection {...styles}>
    {
      title &&
      <h1>{title}</h1>
    }
    <Body {...bodyStyles}>
      {children}
    </Body>
  </StyledSection>
)

Section.defaultProps = {
  title: '',
  bodyStyles: {},
  styles: {
    backgroundColor: PRIMARY_COLOR,
    color: WHITE
  }
}

Section.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  bodyStyles: PropTypes.shape({
    display: PropTypes.string,
    justifyContent: PropTypes.string,
  }),
  styles: PropTypes.shape({
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
  })
}

export default Section
