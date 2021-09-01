// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section className="movie-list">
        { movie.map((item) => <MovieCard key={ item.title } movie={ item } />) }
      </section>
    );
  }
}

MovieList.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
