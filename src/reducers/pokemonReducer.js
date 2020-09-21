import {
  SEARCH_POKEMON_SUCCESS,
  SEARCH_POKEMON_STARTED,
  SEARCH_POKEMON_FAILED,
} from '../actions/types';

const initialState = {
  loading: false,
  error: null,
  pokemon: {
    id: null,
    name: '',
    image: '',
  },
};
export default function geojsonReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_POKEMON_STARTED:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        pokemon: action.payload,
      };
    case SEARCH_POKEMON_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
