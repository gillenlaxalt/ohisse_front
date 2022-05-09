// == Import : npm
import PropTypes from 'prop-types';
// Styles
import './card.scss';

// == Composant
function Card({
  name,
  city,
  picture,
}) {
  return (
    <div className="card">
      <img className="card__image" src={picture} alt={name} />
      <h1 className="card__title">{name},</h1>
      <h2 className="card__location">{city}</h2>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

// == Export
export default Card;