import { StyledSection } from './styles'
import PropTypes from 'prop-types'

const Section = ({ children, title, styles }) => (
  <StyledSection {...styles}>
    {
      title &&
      <h1>{title}</h1>
    }
    {children}
  </StyledSection>
)

Section.defaultProps = {
  title: '',
  styles: {}
}

Section.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  styles: PropTypes.shape({
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
  })
}

export default Section
