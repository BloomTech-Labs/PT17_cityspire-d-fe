import { cityDataReducer } from '../state/reducers/cityData';
import {
  FETCHING_CITY_START,
  FETCHING_CITY_SUCCESS,
  FETCHING_CITY_ERROR,
} from '../state/actions/cityData';

const initialState = {
  isFetching: false,
  error: '',
  city: {},
  currentTemp: 0,
};

describe('cityDate reducer', () => {
  it('should return the initial state', () => {
    expect(cityDataReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle FETCHING_CITY_START', () => {
    expect(
      cityDataReducer(initialState, { type: FETCHING_CITY_START })
    ).toEqual({
      ...initialState,
      isFetching: true,
    });
  });
  it('should handle FETCHING_CITY_SUCCESS', () => {
    expect(
      cityDataReducer(initialState, {
        type: FETCHING_CITY_SUCCESS,
        payload: {
          city: {
            city: {
              city: 'New York',
              state: 'NY',
            },
          },
          temp: 99,
        },
      })
    ).toEqual({
      ...initialState,
      city: {
        city: {
          city: 'New York',
          state: 'NY',
        },
      },
      currentTemp: 99,
    });
  });
  it('should handle FETCHING_CITY_ERROR', () => {
    expect(
      cityDataReducer(initialState, {
        type: FETCHING_CITY_ERROR,
        payload: {
          detail: 'Not Found',
        },
      })
    ).toEqual({
      ...initialState,
      error: { detail: 'Not Found' },
    });
  });
});
