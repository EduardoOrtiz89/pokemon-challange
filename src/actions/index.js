import {
  SEARCH_POKEMON_SUCCESS,
  SEARCH_POKEMON_STARTED,
  SEARCH_POKEMON_FAILED,
} from './types';

const searchStarted = () => ({
  type: SEARCH_POKEMON_STARTED,
  payload: {},
});

const searchSuccess = (response) => ({
  type: SEARCH_POKEMON_SUCCESS,
  payload: {
    id: response.id,
    name: response.name,
    image: response.sprites.front_default,
  },
});

const searchError = (error) => ({
  type: SEARCH_POKEMON_FAILED,
  payload: {
    error,
  },
});

const searchPokemon = (name) => async (dispatch) => {
  dispatch(searchStarted());
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const responseJson = await response.json();
    dispatch(searchSuccess(responseJson));
  } catch (e) {
    dispatch(searchError(e.message));
  }
};

export {
  searchPokemon,
};
