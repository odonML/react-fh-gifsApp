import PropTypes from 'prop-types'
function Card({ url, title }) {
	return (
		<div className="card">
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
}
Card.propTypes = {
	url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
}

export default Card;
