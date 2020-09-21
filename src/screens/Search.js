import React, { useState } from 'react';
import { connect } from 'react-redux';
import PokemonInfo from '../components/PokemonInfo';
import { searchPokemon } from '../actions/index';
import './Search.css';

const Search = ({
  searchPokemon, loading, error, pokemon,
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
        <button onClick={() => searchPokemon(pokemonName)}>Catch</button>
      </div>
      <PokemonComponent />
    </div>
  );
};
const mapStateToProps = (state) => ({
  pokemon: state.pokemonReducer.pokemon,
  loading: state.pokemonReducer.loading,
  error: state.pokemonReducer.error,
});
const mapDispatchToProps = (dispatch) => ({
  searchPokemon: (name) => dispatch(searchPokemon(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
