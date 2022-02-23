import PropTypes from 'prop-types'
import { StyledButton } from './styles'

const Button = ({ children, onClick, type, styles }) => (
  <StyledButton
    onClick={onClick}
    type={type}
    {...styles}>
    {children}
  </StyledButton>
)

Button.defaultProps = {
  type: 'button',
  onClick: () => undefined,
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string
}

export default Button
