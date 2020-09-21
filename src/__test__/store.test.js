import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import chai from 'chai';
import { searchPokemon } from '../actions/index';
import {
  SEARCH_POKEMON_SUCCESS,
  SEARCH_POKEMON_STARTED,
  SEARCH_POKEMON_FAILED,
} from '../actions/types';

global.fetch = require('jest-fetch-mock');

fetch.enableMocks();
const { expect } = chai;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test Store', () => {
  afterEach(() => {
    fetch.resetMocks();
  });
  it('expected actions should be dispatched on success request', () => {
    fetch.mockResponseOnce(JSON.stringify({
      id: 1,
      name: 'Dito',
      sprites: {
        default_front: 'dito.jpg',
      },
    }));
    const store = mockStore({});
    const expectedActions = [
      SEARCH_POKEMON_STARTED,
      SEARCH_POKEMON_SUCCESS,
    ];

    return store.dispatch(searchPokemon('ditto'))
      .then(() => {
        const actualActions = store.getActions().map((action) => action.type);
        expect(actualActions).to.eql(expectedActions);
      });
  });

  it('expected actions should be dispatched on failed request', () => {
    fetch.mockRejectOnce({ message: 'Not found' });

    const store = mockStore({});
    const expectedActions = [
      SEARCH_POKEMON_STARTED,
      SEARCH_POKEMON_FAILED,
    ];

    return store.dispatch(searchPokemon('ditto'))
      .then(() => {
        const actualActions = store.getActions().map((action) => action.type);
        expect(actualActions).to.eql(expectedActions);
      });
  });
});
