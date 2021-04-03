import { cityOperationsReducer } from '../state/reducers/cityOperations';
import {
  FETCHING_CITIES_START,
  FETCHING_CITIES_SUCCESS,
  FETCHING_CITIES_ERROR,
  PIN_CITY,
  UNPIN_CITY,
} from '../state/actions/cityOperations';

const initialState = {
  isFetching: false,
  savedCities: [],
  isSaved: false,
  error: null,
};

describe('cityOperations reducer', () => {
  it('should return the initial state', () => {
    expect(cityOperationsReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle FETCHING_CITIES_START', () => {
    expect(
      cityOperationsReducer(initialState, { type: FETCHING_CITIES_START })
    ).toEqual({
      ...initialState,
      isFetching: true,
    });
  });
  it('should handle FETCHING_CITIES_SUCCESS', () => {
    expect(
      cityOperationsReducer(initialState, {
        type: FETCHING_CITIES_SUCCESS,
        payload: {
          id: 2,
          city: 'Olathe',
          state: 'Kansas',
          rental_price: 1200,
          crime: 'low',
          pollution: 'low',
          walkability: 20,
          livability: 95,
          profile_id: '00ulthapbErVUwVJy4x6',
        },
      })
    ).toEqual({
      ...initialState,
      savedCities: [
        {
          id: 2,
          city: 'Olathe',
          state: 'Kansas',
          rental_price: 1200,
          crime: 'low',
          pollution: 'low',
          walkability: 20,
          livability: 95,
          profile_id: '00ulthapbErVUwVJy4x6',
        },
      ],
    });
  });
  it('should handle FETCHING_CITIES_ERROR', () => {
    expect(
      cityOperationsReducer(initialState, {
        type: FETCHING_CITIES_ERROR,
        payload: {
          error: 'Not Found',
        },
      })
    ).toEqual({
      ...initialState,
      error: { error: 'Not Found' },
    });
  });
  it('should handle PIN_CITY', () => {
    expect(
      cityOperationsReducer(initialState, {
        type: PIN_CITY,
        payload: {
          city: 'Olathe',
          state: 'Kansas',
          rental_price: 1200,
          crime: 'low',
          pollution: 'low',
          walkability: 20,
          livability: 95,
          profile_id: '00ulthapbErVUwVJy4x6',
        },
      })
    ).toEqual({
      ...initialState,
      savedCities: [
        {
          city: 'Olathe',
          state: 'Kansas',
          rental_price: 1200,
          crime: 'low',
          pollution: 'low',
          walkability: 20,
          livability: 95,
          profile_id: '00ulthapbErVUwVJy4x6',
        },
      ],
      isSaved: true,
    });
  });
  it('should handle UNPIN_CITY', () => {
    expect(
      cityOperationsReducer(initialState, {
        type: UNPIN_CITY,
        payload: {
          id: 2,
          city: 'Olathe',
          state: 'Kansas',
          rental_price: 1200,
          crime: 'low',
          pollution: 'low',
          walkability: 20,
          livability: 95,
          profile_id: '00ulthapbErVUwVJy4x6',
        },
      })
    ).toEqual({
      ...initialState,
      savedCities: [],
      isSaved: false,
    });
  });
});
