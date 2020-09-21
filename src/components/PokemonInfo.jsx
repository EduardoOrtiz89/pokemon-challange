import React from 'react';
import { connect } from 'react-redux';
import './PokemonInfo.css';
import PropTypes from 'prop-types';

const PokemonInfo = ({ id, name, image }) => (
  <div className="pokemon-info-container">
    <img alt="Pokemon" src={image} />
    <div>
      <ul>
        <li>
          <strong>ID: </strong>
          <span>{id}</span>
        </li>
        <li>
          <strong>Name: </strong>
          <span>{name}</span>
        </li>
      </ul>
    </div>
  </div>
);

PokemonInfo.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ ...state.pokemonReducer.pokemon });

export default connect(mapStateToProps)(PokemonInfo);
