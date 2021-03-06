// == Import : npm
import PropTypes from 'prop-types';
// Styles
import './card.scss';

// == Composant
function Card({
  name,
  city,
  picture,
  className,
}) {
  if (picture === null) {
    // console.log('the picture is null');
    picture = 'https://www.montagnes-magazine.com/media/actu/2020/05/jef-willemyns-mluUYXoTotY-unsplash.jpg';
  }
  return (
    <div className={className}>
      <img className="card__image" src={picture} alt={name} />
      <h1 className="card__title">{name},</h1>
      <h2 className="card__location">{city}</h2>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  picture: PropTypes.string,
  className: PropTypes.string.isRequired,
};

Card.defaultProps = {
  picture: 'https://www.grimper.com/media/guide_salles/img_salles/arkose_montreuil_5_arkose.jpg',
};

// == Export
export default Card;
