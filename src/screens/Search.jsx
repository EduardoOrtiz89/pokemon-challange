import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PokemonInfo from '../components/PokemonInfo';
import { searchPokemon } from '../actions/index';
import './Search.css';

const Search = ({
  search, loading, error, pokemon,
}) => {
  const [pokemonName, setPokemonName] = useState('');

  const PokemonComponent = () => {
    if (loading) {
      return <p className="loading">Loading...</p>;
    }
    if (error) {
      return <p className="error">Pokemon Not Found</p>;
    }
    if (pokemon.id) {
      return <PokemonInfo />;
    }

    return <div />;
  };

  return (
    <div>
      <div className="search-container">
        <input type="text" onChange={(e) => setPokemonName(e.target.value)} placeholder="Pokemon Name" />
        <button type="button" onClick={() => search(pokemonName)}>Catch</button>
      </div>
      <PokemonComponent />
    </div>
  );
};

Search.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  pokemon: PropTypes.any.isRequired,
  search: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  pokemon: state.pokemonReducer.pokemon,
  loading: state.pokemonReducer.loading,
  error: state.pokemonReducer.error,
});
const mapDispatchToProps = (dispatch) => ({
  search: (name) => dispatch(searchPokemon(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
