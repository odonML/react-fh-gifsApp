import PropTypes from 'prop-types'
import CardGrid from './CardGrid';
function List({categories}) {
    return (
        <>
        {
            categories.map((categori) => (
                <CardGrid key={categori} categori={categori}></CardGrid>
            ))
        }
        </>
      );
}

List.propType = {
    categories: PropTypes.array.isRequired,
}

export default List;