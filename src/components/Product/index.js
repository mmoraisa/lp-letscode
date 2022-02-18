import PropTypes from 'prop-types'
import Button from '../Button';
import { Wrapper } from './styles'

const Product = ({ service }) => {
  
  const { name, label, description } = service;
 
  return (
    <Wrapper>
      <h2>{label}</h2>
      <p>
        {description}
      </p>
      <Button>Quero saber mais!</Button>
    </Wrapper>
  )
}

Product.propTypes = {
  service: PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
}

export default Product
